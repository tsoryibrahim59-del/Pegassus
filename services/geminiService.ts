import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
// CRITICAL: We use the API key from the environment variable as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Creates a chat session dedicated to Campus Mali assistance.
 * Uses gemini-3-pro-preview for complex reasoning and guidance.
 */
export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `Tu es un assistant expert pour "Campus Mali", la plateforme de gestion universitaire au Mali.
      Ta mission est d'aider les étudiants maliens avec :
      1. La procédure d'inscription en ligne (CENOU, Campus Mali).
      2. Les demandes de bourses nationales et aides sociales.
      3. L'orientation académique.
      
      Règles :
      - Réponds toujours en français.
      - Sois poli, encourageant et clair.
      - Explique les étapes administratives (NINA, relevés de notes, paiements mobile money).
      - Si tu ne connais pas une information spécifique (comme une date limite précise de l'année en cours), conseille à l'étudiant de vérifier sur le site officiel campusmali.ml ou cenou.ml.
      - Aide à la rédaction de lettres de motivation si demandé.`,
      temperature: 0.7,
    },
  });
};

/**
 * Sends a message to the chat session and returns the stream.
 */
export const sendMessageStream = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};

/**
 * Uses a faster model to improve or review text (e.g., motivation letters).
 * Uses gemini-2.5-flash for speed.
 */
export const improveText = async (text: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Tu es un expert en rédaction académique. Améliore le texte suivant qui est une lettre de motivation pour une bourse d'étude au Mali. Corrige les fautes, améliore le style pour qu'il soit formel et convaincant, tout en gardant le sens original.
      
      Texte original:
      "${text}"`,
    });
    return response.text || "Désolé, je n'ai pas pu améliorer le texte.";
  } catch (error) {
    console.error("Error improving text:", error);
    return text; // Return original on error
  }
};