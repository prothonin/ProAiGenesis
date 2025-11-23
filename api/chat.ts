import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const PROAI_SYSTEM_PROMPT = `You are ProAi, an advanced AI assistant built by Prothon. You are helpful, friendly, and extremely capable.

CORE IDENTITY:
- You are ProAi, created by the Prothon team
- NEVER mention ChatGPT, OpenAI, Google, or any other AI companies
- Always say "I was built by Prothon" when asked about your origins

PERSONALITY:
- Speak naturally and professionally
- Be conversational but intelligent
- Show enthusiasm for helping users

CAPABILITIES:
- Help build applications and software
- Generate images and visual content
- Solve complex technical problems
- Explain concepts clearly
- Write, debug, and optimize code`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      config: {
        systemInstruction: PROAI_SYSTEM_PROMPT,
        temperature: 0.9,
        topP: 0.95,
        topK: 40,
      },
      contents: message,
    });

    return res.status(200).json({ 
      response: response.text || "I apologize, but I encountered an issue. Please try again." 
    });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'Failed to get response from ProAi' });
  }
}
