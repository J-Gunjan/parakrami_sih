import * as FileSystem from 'expo-file-system';

export class ImageStorageService {
  /**
   * Ensures the inspection directory exists
   */
  private static async ensureDirectoryExists(inspectionId: string): Promise<string> {
    const dir = `${FileSystem.documentDirectory || ''}inspections/${inspectionId}/`;
    const dirInfo = await FileSystem.getInfoAsync(dir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
    return dir;
  }

  /**
   * Saves an image to the persistent document directory
   * @param inspectionId The ID of the inspection
   * @param imageId A unique ID for the image
   * @param tempUri The temporary URI from the camera/image picker
   * @returns The persistent file path
   */
  static async saveImage(inspectionId: string, imageId: string, tempUri: string): Promise<string> {
    const dir = await this.ensureDirectoryExists(inspectionId);
    // Determine extension, default to .jpg
    const extension = tempUri.split('.').pop() || 'jpg';
    const destinationPath = `${dir}${imageId}.${extension}`;
    
    await FileSystem.copyAsync({
      from: tempUri,
      to: destinationPath,
    });
    
    return destinationPath;
  }

  /**
   * Gets the local file URI for an image
   * @param localFilePath The path returned by saveImage
   */
  static async getImage(localFilePath: string): Promise<string | null> {
    const info = await FileSystem.getInfoAsync(localFilePath);
    if (info.exists) {
      return info.uri;
    }
    return null;
  }

  /**
   * Deletes an image from the filesystem
   * @param localFilePath The persistent file path
   */
  static async deleteImage(localFilePath: string): Promise<void> {
    const info = await FileSystem.getInfoAsync(localFilePath);
    if (info.exists) {
      await FileSystem.deleteAsync(localFilePath);
    }
  }

  /**
   * Lists all image URIs for a specific inspection
   * @param inspectionId The ID of the inspection
   */
  static async listImagesForInspection(inspectionId: string): Promise<string[]> {
    const dir = `${FileSystem.documentDirectory || ''}inspections/${inspectionId}/`;
    const dirInfo = await FileSystem.getInfoAsync(dir);
    if (!dirInfo.exists) {
      return [];
    }
    
    const files = await FileSystem.readDirectoryAsync(dir);
    return files.map(file => `${dir}${file}`);
  }
}
