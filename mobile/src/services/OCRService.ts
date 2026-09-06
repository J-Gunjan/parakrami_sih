import TextRecognition from '@react-native-ml-kit/text-recognition';
import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';
import { getBackendUrl } from '../utils/api';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface OCRBlock {
  text: string;
  boundingBox?: BoundingBox;
  confidence: number;
}

export interface ExtractionResult {
  blocks: OCRBlock[];
  geminiFields?: any;
}

export interface OCRService {
  extractText(imageUri: string): Promise<ExtractionResult>;
}

export class OnDeviceOCRService implements OCRService {
  async extractText(imageUri: string): Promise<ExtractionResult> {
    try {
      const result = await TextRecognition.recognize(imageUri);
      
      const blocks: OCRBlock[] = result.blocks.map(block => ({
        text: block.text,
        boundingBox: {
          x: block.frame?.left || 0,
          y: block.frame?.top || 0,
          width: block.frame?.width || 0,
          height: block.frame?.height || 0
        },
        // ML Kit text recognition doesn't always provide confidence per block out of the box in the react-native wrapper,
        // so we'll default to 0.9 for on-device reads, or use block.confidence if available.
        confidence: 0.9
      }));

      return { blocks };
    } catch (error) {
      console.error("OnDeviceOCR error:", error);
      throw error;
    }
  }
}

export class CloudOCRService implements OCRService {
  private apiUrl: string;

  constructor(apiUrl?: string) {
    const defaultUrl = `${getBackendUrl()}/api/ocr/extract`;
    this.apiUrl = apiUrl || defaultUrl;
  }

  async extractText(imageUri: string): Promise<ExtractionResult> {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'label.jpg',
        type: 'image/jpeg',
      } as any);

      console.log(`[CloudOCR] Making POST request to: ${this.apiUrl}`);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      console.log(`[CloudOCR] Response status: ${response.status}`);

      if (!response.ok) {
        let errorMsg = `Cloud OCR failed with status: ${response.status}`;
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
             errorMsg = `Cloud OCR API Error (${response.status}): ${errorData.error}`;
          }
        } catch (e) {
          // ignore parse error for error body
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      return {
        blocks: data.blocks || [],
        geminiFields: data.geminiFields
      };
    } catch (error: any) {
      console.error(`[CloudOCR] Network/Fetch Error:`, error.message || error);
      throw error;
    }
  }
}

export class UnifiedOCRService implements OCRService {
  private onDevice: OnDeviceOCRService;
  private cloud: CloudOCRService;

  constructor(apiUrl?: string) {
    this.onDevice = new OnDeviceOCRService();
    this.cloud = new CloudOCRService(apiUrl);
  }

  private async preprocessImage(uri: string): Promise<string> {
    try {
      const result = await manipulateAsync(
        uri,
        [{ resize: { width: 1000 } }],
        { compress: 0.8, format: SaveFormat.JPEG }
      );
      return result.uri;
    } catch (e) {
      console.warn('Failed to preprocess image, using original', e);
      return uri;
    }
  }

  async extractText(imageUri: string): Promise<ExtractionResult> {
    const processedUri = await this.preprocessImage(imageUri);
    const netInfo = await NetInfo.fetch();
    const isOnline = netInfo.isConnected && netInfo.isInternetReachable !== false;

    // We ALWAYS want on-device ML Kit blocks for real spatial evidence (bounding boxes)
    console.log('Running On-Device OCR for real bounding boxes...');
    const localResult = await this.onDevice.extractText(processedUri);

    if (isOnline) {
      try {
        console.log('Online: Attempting Cloud Gemini OCR for semantic enrichment...');
        const cloudResult = await this.cloud.extractText(processedUri);
        
        // Merge them: preserve local blocks as spatial evidence source of truth,
        // and include Gemini's semantic structured fields.
        return {
          blocks: localResult.blocks,
          geminiFields: cloudResult.geminiFields
        };
      } catch (error: any) {
        console.error('❌ Cloud OCR entirely failed:', error.message || error);
        
        let reason = error.message || 'OCR Service Unavailable';
        if (error.name === 'AbortError') reason = 'Request timed out';
        
        return {
          blocks: localResult.blocks,
          geminiFields: {
             _isDemoFallback: true,
             _fallbackReason: reason,
             productName: { value: 'Demo Product [OCR Unavailable]', confidence: 0.1 },
             mrp: { value: '100.00 (Demo)', confidence: 0.1 },
             netQuantity: { value: '500g (Demo)', confidence: 0.1 },
          }
        };
      }
    } else {
      console.log('Offline: Using On-Device OCR only...');
      return localResult;
    }
  }
}

// Export a default instance
// Ideally, apiUrl is read from env config
export const ocrService = new UnifiedOCRService();
