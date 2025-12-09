import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client.
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAiResponse = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Demo Mode: API Key is missing. Please configure the environment variable API_KEY to use the full AI capability. (Simulating response...)";
  }

  try {
    const modelId = 'gemini-2.5-flash';
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "You are the 'MasterRoll AI Tutor', a helpful assistant embedded in the MasterRoll EdTech platform. Your goal is to help students with academic doubts and assist teachers with lesson planning. Keep answers concise, encouraging, and educational. If asked about MasterRoll features, explain them enthusiastically.",
      }
    });

    return response.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to the AI service.";
  }
};