import { GeminiOCRService } from './src/services/GeminiOCRService';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

async function test() {
    try {
        const ocr = new GeminiOCRService();
        // create a dummy image buffer
        const buf = Buffer.from('dummy image data');
        const res = await ocr.extractText(buf);
        console.log(res);
    } catch (e) {
        console.error(e);
    }
}
test();
