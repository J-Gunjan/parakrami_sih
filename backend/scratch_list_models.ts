import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'c:/Users/Gunjan Kumari Jha/Desktop/gman/nyayalabel-ai/backend/.env' });

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "hello"
    });
    console.log("SUCCESS 2.5:", res.text);
  } catch(e: any) {
    console.error("ERROR 2.5", e.message || e);
  }
}
test();
