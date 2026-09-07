import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});


export async function createDigest(articleUrls: string[]) {
const interaction = await ai.interactions.create({
  model: "gemini-3.8-flash",
  input: `Given an array of articles urls return a digest of the contents suitable for a Slack message. The articles are: ${articleUrls}`,
});
return interaction.output_text;       
}