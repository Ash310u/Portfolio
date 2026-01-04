'use server';

/**
 * @fileOverview An AI agent to generate abstract visuals for the 'About' section based on a text description.
 *
 * - generateAbstractVisual - A function that handles the generation of the abstract visual.
 * - GenerateAbstractVisualInput - The input type for the generateAbstractVisual function.
 * - GenerateAbstractVisualOutput - The return type for the generateAbstractVisual function.
 */

import {getAI} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAbstractVisualInputSchema = z.object({
  description: z
    .string()
    .describe("A description of the professional profile for which to generate an abstract visual."),
});
export type GenerateAbstractVisualInput = z.infer<typeof GenerateAbstractVisualInputSchema>;

const GenerateAbstractVisualOutputSchema = z.object({
  visualDataUri: z
    .string()
    .describe("A data URI containing the generated abstract visual (e.g., 'data:image/png;base64,...')."),
});
export type GenerateAbstractVisualOutput = z.infer<typeof GenerateAbstractVisualOutputSchema>;

// Lazy initialization - only create flows when function is called
let generateAbstractVisualFlow: ((input: GenerateAbstractVisualInput) => Promise<GenerateAbstractVisualOutput>) | null = null;

function getGenerateAbstractVisualFlow() {
  if (!generateAbstractVisualFlow) {
    const ai = getAI();
    const prompt = ai.definePrompt({
      name: 'generateAbstractVisualPrompt',
      input: {schema: GenerateAbstractVisualInputSchema},
      output: {schema: GenerateAbstractVisualOutputSchema},
      prompt: `You are an AI that generates abstract visuals that represent a professional profile.

  Based on the following description, create an abstract visual:
  {{description}}

  The visual should be modern, professional, and suitable for use in the 'About' section of a portfolio website.
  Return the visual as a data URI.
  Ensure that the image is high quality and visually appealing.
  It should have a dark background to fit a dark themed website.
  It should be abstract and not a literal depiction of a person or object described in the description.
  The colors should be complementary to orange, as that is the intended accent color of the website.
  The image should evoke feelings of: intelligence, systems thinking, and engineering.
  If the description is about backend systems, show data flowing through servers, or complex logic being performed.
  If the description is about AI, show neural networks activating, or some other representation of modern AI.
  If the description is about product engineering, show data structures being manipulated, or other abstract depictions of code.
  Do not show any text in the image.
  Do not show any faces or people in the image.
  `, // Prompt end
    });

    generateAbstractVisualFlow = ai.defineFlow(
      {
        name: 'generateAbstractVisualFlow',
        inputSchema: GenerateAbstractVisualInputSchema,
        outputSchema: GenerateAbstractVisualOutputSchema,
      },
      async input => {
        const {media} = await ai.generate({
          model: 'googleai/imagen-4.0-fast-generate-001',
          prompt: prompt(input).prompt,
        });

        if (!media || !media.url) {
          throw new Error('Failed to generate abstract visual.');
        }

        return {visualDataUri: media.url};
      }
    );
  }
  return generateAbstractVisualFlow;
}

export async function generateAbstractVisual(
  input: GenerateAbstractVisualInput
): Promise<GenerateAbstractVisualOutput> {
  const flow = getGenerateAbstractVisualFlow();
  return flow(input);
}
