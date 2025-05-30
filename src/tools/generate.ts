// src/tools/generate.ts
import { z } from 'zod';

const generateSchema = z.object({
  prompt: z.string().describe("The text description of the SVG to generate"),
  quality: z.enum(['low', 'medium', 'high']).default('medium').describe("Quality level of the generated SVG"),
  aspectRatio: z.enum(['auto', 'portrait', 'landscape', 'square', 'wide', 'tall']).default('auto').describe("Aspect ratio of the generated SVG"),
  background: z.enum(['auto', 'transparent', 'opaque']).default('auto').describe("Background type of the generated SVG"),
  apiKey: z.string().describe("Your SVGMaker API key"),
  styleParams: z.record(z.any()).optional().describe("Additional style parameters for the SVG")
});

type GenerateParams = z.infer<typeof generateSchema>;

export const generateTool = {
  name: "generate-svg",
  description: "Generate an SVG from a text description using AI",
  parameters: generateSchema,
  execute: async (params: GenerateParams) => {
    try {
      const response = await fetch('http://localhost:3000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': params.apiKey
        },
        body: JSON.stringify({
          prompt: params.prompt,
          quality: params.quality,
          aspectRatio: params.aspectRatio,
          background: params.background,
          ...params.styleParams
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to generate SVG: ${response.statusText}`);
      }

      const result = await response.json();
      return result.svgUrl || result.svg;
    } catch (error) {
      console.error('SVG generation error:', error);
      throw error;
    }
  }
};