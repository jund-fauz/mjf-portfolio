'use server';
/**
 * @fileOverview AI-powered bio generator for developer portfolios.
 *
 * - generateBio - A function that generates a personalized introduction text.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'A comma-separated list of keywords representing technologies and skills to highlight in the bio.'
    ),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z
    .string()
    .describe('A personalized introduction text generated based on the provided keywords.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const generateBioPrompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {schema: GenerateBioInputSchema},
  output: {schema: GenerateBioOutputSchema},
  prompt: `You are a professional bio writer specializing in creating engaging introductions for developer portfolios.

  Based on the following keywords, generate a short and captivating bio that highlights the developer's expertise and experience.
  The bio should be no more than 150 words.

  Keywords: {{{keywords}}}
  `,
});

const generateBioFlow = ai.defineFlow(
  {
    name: 'generateBioFlow',
    inputSchema: GenerateBioInputSchema,
    outputSchema: GenerateBioOutputSchema,
  },
  async input => {
    const {output} = await generateBioPrompt(input);
    return output!;
  }
);
