import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const imageBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64'); // 1x1 transparent png
  
  const imagePart = {
    inlineData: {
      data: imageBuffer.toString("base64"),
      mimeType: "image/png"
    },
  };
  
  const prompt = "Describe this image";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: [imagePart, prompt],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
             description: { type: Type.STRING }
          }
        },
        temperature: 0.1,
      }
    });
    console.log("Success:", response.text);
  } catch (e: any) {
    console.error("Failed:", e.message || e);
  }
}

run();
