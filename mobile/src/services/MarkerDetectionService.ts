export enum MarkerDetectionError {
  NOT_FOUND = 'NOT_FOUND',
  MULTIPLE_MARKERS = 'MULTIPLE_MARKERS',
  OCCLUDED = 'OCCLUDED',
  POOR_QUALITY = 'POOR_QUALITY',
  PERSPECTIVE_DISTORTION = 'PERSPECTIVE_DISTORTION',
  INSUFFICIENT_CONFIDENCE = 'INSUFFICIENT_CONFIDENCE',
}

export interface MarkerDetectionResult {
  success: boolean;
  pixelWidth?: number;
  confidence?: number;
  error?: MarkerDetectionError;
  errorMessage?: string;
}

export interface IMarkerDetectionService {
  /**
   * Detects the reference marker (e.g., 50mm green card) in the image and returns its width in pixels.
   * This service is designed to be backed by OpenCV or a robust ML model.
   * It must NEVER return a simulated or hardcoded width for actual compliance measurement.
   */
  detectMarker(imageUri: string): Promise<MarkerDetectionResult>;
}

import * as FileSystem from 'expo-file-system';
import * as jpeg from 'jpeg-js';
import { Buffer } from 'buffer';

// @ts-ignore
const AR = require('js-aruco2').AR;

/**
 * On-device Marker Detection using pure JavaScript (js-aruco2).
 * Reads the image, extracts pixel data, and identifies ArUco markers.
 */
export class JSArucoMarkerDetectionService implements IMarkerDetectionService {
  async detectMarker(imageUri: string): Promise<MarkerDetectionResult> {
    try {
      console.log('[MarkerDetection] Reading image file for native JS CV processing...');
      const base64Data = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const buffer = Buffer.from(base64Data, 'base64');
      const rawImageData = jpeg.decode(buffer, { useTArray: true }); // uint8array
      
      const width = rawImageData.width;
      const height = rawImageData.height;
      const data = rawImageData.data;

      // js-aruco requires an image object with data, width, height where data is RGBA.
      // jpeg-js provides RGBA by default. We just need to convert it to grayscale or let the detector do it.
      // js-aruco detector actually expects an array-like object of RGBA values.
      const image = {
        data: data,
        width: width,
        height: height
      };

      const detector = new AR.Detector();
      const markers = detector.detect(image);

      if (markers && markers.length > 0) {
        // We found valid ArUco markers (likely in the default dictionary).
        const marker = markers[0]; // Assume first is the reference
        
        // Compute width using euclidean distance between corner 0 and corner 1
        const corners = marker.corners;
        const dx = corners[0].x - corners[1].x;
        const dy = corners[0].y - corners[1].y;
        const pixelWidth = Math.sqrt(dx * dx + dy * dy);

        console.log(`[MarkerDetection] Found Marker ID: ${marker.id}, Width: ${pixelWidth.toFixed(2)}px`);
        return {
          success: true,
          pixelWidth: pixelWidth,
          confidence: 0.9,
        };
      }

      // If strict dictionary match failed (DICT_4X4 might not be supported natively by js-aruco2 default),
      // we can fallback to finding the best candidate square contour that the detector found.
      const candidates = detector.candidates;
      if (candidates && candidates.length > 0) {
        console.log(`[MarkerDetection] No exact dictionary match, but found ${candidates.length} candidates. Selecting best square...`);
        // Pick the largest candidate
        let bestCandidate = null;
        let maxArea = 0;

        for (const cand of candidates) {
          const dx = cand[0].x - cand[1].x;
          const dy = cand[0].y - cand[1].y;
          const len1 = Math.sqrt(dx * dx + dy * dy);

          const dx2 = cand[1].x - cand[2].x;
          const dy2 = cand[1].y - cand[2].y;
          const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          const area = len1 * len2;
          
          // Basic square check
          const aspect = Math.max(len1, len2) / Math.min(len1, len2);
          if (aspect < 1.3 && area > maxArea && area > 900) { // at least 30x30 pixels
            maxArea = area;
            bestCandidate = { cand, width: len1 };
          }
        }

        if (bestCandidate) {
          console.log(`[MarkerDetection] Fallback candidate selected, Width: ${bestCandidate.width.toFixed(2)}px`);
          return {
             success: true,
             pixelWidth: bestCandidate.width,
             confidence: 0.7, // Lower confidence for candidate-only match
          };
        }
      }

      return {
        success: false,
        error: MarkerDetectionError.NOT_FOUND,
        errorMessage: 'ArUco marker not found. Ensure the full 50 mm marker is visible.',
      };

    } catch (e: any) {
      console.error('[MarkerDetection] Error during JS CV detection:', e);
      return {
        success: false,
        error: MarkerDetectionError.POOR_QUALITY,
        errorMessage: e.message || 'Image processing failed during marker detection.',
      };
    }
  }
}

export const markerDetectionService = new JSArucoMarkerDetectionService();
