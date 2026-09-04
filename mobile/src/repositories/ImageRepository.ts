import { database } from '../database';
import CapturedImage from '../database/models/CapturedImage';
import { ImageStorageService } from '../services/ImageStorageService';

export class ImageRepository {
  /**
   * Saves an image to the file system and records it in the database
   */
  static async create(data: {
    inspectionId: string;
    tempUri: string;
    imageType: string;
  }): Promise<CapturedImage> {
    const imageId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
    // 1. Save to FileSystem
    const localFilePath = await ImageStorageService.saveImage(
      data.inspectionId,
      imageId,
      data.tempUri
    );

    // 2. Save to WatermelonDB
    return await database.write(async () => {
      return await database.get<CapturedImage>('captured_images').create(img => {
        img.inspectionId = data.inspectionId;
        img.localFilePath = localFilePath;
        img.imageType = data.imageType;
        img.capturedAt = Date.now();
        img.uploaded = false;
      });
    });
  }

  /**
   * Retrieves all images for an inspection from the DB
   */
  static async listForInspection(inspectionId: string): Promise<CapturedImage[]> {
    const inspection = await database.get<any>('inspections').find(inspectionId);
    return await inspection.capturedImages.fetch();
  }

  /**
   * Deletes an image from the DB and FileSystem
   */
  static async delete(id: string): Promise<void> {
    const image = await database.get<CapturedImage>('captured_images').find(id);
    
    // Delete from FS
    await ImageStorageService.deleteImage(image.localFilePath);
    
    // Delete from DB
    await database.write(async () => {
      await image.destroyPermanently();
    });
  }
}
