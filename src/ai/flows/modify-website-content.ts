'use server';

/**
 * @fileOverview This file defines a Genkit flow for modifying website content using AI.
 *
 * The flow allows users to generate alternative taglines or about descriptions using AI.
 *
 * - modifyWebsiteContent - A function that handles the modification of website content using AI.
 * - ModifyWebsiteContentInput - The input type for the modifyWebsiteContent function.
 * - ModifyWebsiteContentOutput - The return type for the modifyWebsiteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModifyWebsiteContentInputSchema = z.object({
  contentType: z
    .string()
    .describe(
      'The type of content to modify (e.g., tagline, about description).'
    ),
  existingContent: z
    .string()
    .describe('The existing content that needs to be modified.'),
  userInput: z
    .string()
    .optional()
    .describe('Optional user input to guide the content modification.'),
});

export type ModifyWebsiteContentInput = z.infer<
  typeof ModifyWebsiteContentInputSchema
>;

const ModifyWebsiteContentOutputSchema = z.object({
  modifiedContent: z
    .string()
    .describe('The AI-generated modified content.'),
});

export type ModifyWebsiteContentOutput = z.infer<
  typeof ModifyWebsiteContentOutputSchema
>;

export async function modifyWebsiteContent(
  input: ModifyWebsiteContentInput
): Promise<ModifyWebsiteContentOutput> {
  return modifyWebsiteContentFlow(input);
}

const modifyWebsiteContentPrompt = ai.definePrompt({
  name: 'modifyWebsiteContentPrompt',
  input: {schema: ModifyWebsiteContentInputSchema},
  output: {schema: ModifyWebsiteContentOutputSchema},
  prompt: `You are an AI assistant specializing in refining website content.

  The user wants to modify the following type of content: {{{contentType}}}
  The existing content is: {{{existingContent}}}
  Here are some optional user instructions: {{{userInput}}}

  Please generate a modified version of the content that is more engaging and effective.
  The content must sound professional, modern, and suitable for a software engineer's portfolio website.
  The tone should be cinematic, minimal, and premium.
  Return only the modified content.
  `,
});

const modifyWebsiteContentFlow = ai.defineFlow(
  {
    name: 'modifyWebsiteContentFlow',
    inputSchema: ModifyWebsiteContentInputSchema,
    outputSchema: ModifyWebsiteContentOutputSchema,
  },
  async input => {
    const {output} = await modifyWebsiteContentPrompt(input);
    return output!;
  }
);
