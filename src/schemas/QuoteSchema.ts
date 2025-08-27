import z from "zod";

export const quotesSchema = z.object({
  qoute: z.string(),
  author: z.string(),
  category: z.string()
})

export type Quote = z.infer<typeof quotesSchema>;