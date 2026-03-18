import { GoogleGenAI } from "@google/genai";

export const generateSafetyImages = async () => {
  const apiKey = process.env.GEMINI_API_KEY || (window as any).process?.env?.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Gemini API key not found");
    return [];
  }
  const ai = new GoogleGenAI({ apiKey });
  const prompts = [
    "A professional portrait of a South Asian male safety trainer (Ahmed Khurshid) wearing a white hard hat and a high-visibility orange vest. He is smiling confidently in a modern industrial office setting. Cinematic lighting, high resolution, professional photography.",
    "A real-world industrial safety training scene. A group of diverse workers in safety gear (helmets, vests) gathered around a trainer demonstrating fire safety equipment in an oil and gas facility. Realistic, documentary style, high quality.",
    "A close-up of a safety officer conducting a site inspection at a large construction project in Saudi Arabia. Modern skyscrapers in the background, clear blue sky. The officer is checking a digital tablet. Sharp focus, professional industrial photography."
  ];

  const images = await Promise.all(prompts.map(async (prompt) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: "4:5"
          }
        }
      });
      
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    } catch (e) {
      console.error("Error generating image:", e);
    }
    return null;
  }));

  return images.filter(img => img !== null);
};

export const generateImage = async (prompt: string, aspectRatio: "1:1" | "4:5" | "16:9" = "1:1") => {
  const apiKey = process.env.GEMINI_API_KEY || (window as any).process?.env?.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Gemini API key not found");
    return null;
  }
  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio
        }
      }
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (e) {
    console.error("Error generating image:", e);
  }
  return null;
};
