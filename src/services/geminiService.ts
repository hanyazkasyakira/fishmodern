import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSeafoodResponse = async (
  query: string,
  history: string[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    const systemPrompt = `
      You are the AI Export Assistant for PT Sari Segar Laut Indonesia.
      We are a premium seafood supplier and exporter based in Indonesia.
      We specialize in Frozen Tuna (Yellowfin, Skipjack), Marlin, Oilfish, and Cephalopods (Octopus, Squid).
      Our values are Freshness, Sustainability, and Cold Chain Integrity.
      
      Target Audience: International B2B buyers (Wholesalers, Distributors, Processors).
      Tone: Professional, helpful, concise, and business-oriented.
      
      Answer questions about:
      - Product availability (assume we have Tuna, Mahi Mahi, Octopus available).
      - Shipping/Logistics (we export globally via ocean freight and air cargo).
      - Quality Control (HACCP, Halal, BRC certified).
      
      If asked about prices, say: "Please contact our sales team at sales@sarisegarlaut.co.id for the latest quotation as market prices fluctuate."
      Keep answers under 100 words unless detailed technical specs are asked.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...history.map(msg => ({ role: 'model', parts: [{ text: msg }] })), // Simplified history for this demo
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        maxOutputTokens: 300,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I could not generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our system is currently experiencing high traffic. Please try again later.";
  }
};