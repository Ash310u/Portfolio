import 'server-only';

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Only initialize if API key is available
let ai: ReturnType<typeof genkit> | null = null;

try {
  if (process.env.GOOGLE_GENAI_API_KEY) {
    ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
  }
} catch (error) {
  // Silently fail if genkit can't be initialized
  console.warn('Genkit initialization skipped:', error);
}

// Export a getter that throws if AI is not available
export const getAI = () => {
  if (!ai) {
    throw new Error('AI features are not available. GOOGLE_GENAI_API_KEY is required.');
  }
  return ai;
};

// For backward compatibility, export ai directly (will be null if not initialized)
export { ai };
