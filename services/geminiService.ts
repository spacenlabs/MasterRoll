import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// We do not initialize the client at the top level to prevent runtime crashes
// if the API key is missing during the initial script evaluation.
let ai: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI | null => {
  if (ai) return ai;
  
  if (!process.env.API_KEY) {
    console.warn("API Key is missing.");
    return null;
  }

  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai;
};

export const generateAiResponse = async (prompt: string): Promise<string> => {
  const client = getAiClient();

  if (!client) {
    return "Demo Mode: API Key is missing. Please configure the environment variable API_KEY to use the full AI capability. (Simulating response...)";
  }

  try {
    const modelId = 'gemini-2.5-flash';
    const response: GenerateContentResponse = await client.models.generateContent({
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