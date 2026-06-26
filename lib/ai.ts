import { createOpenAI } from "@ai-sdk/openai";

// Featherless AI — OpenAI-compatible, single API key
export const featherless = createOpenAI({
  baseURL: "https://api.featherless.ai/v1",
  apiKey: process.env.FEATHERLESS_API_KEY!,
});

// Hermes 3 on Llama 3.1 70B — confirmed working, excellent for instruction + code
export const CHAT_MODEL = featherless("NousResearch/Hermes-3-Llama-3.1-70B");
export const CODEGEN_MODEL = featherless("NousResearch/Hermes-3-Llama-3.1-70B");
