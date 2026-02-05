import { defineCollection, z } from "astro:content";
import { CASE_STUDY_TAGS } from "../data/taxonomy";

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(8),
    subtitle: z.string().min(12),
    summary: z.string().min(20),
    date: z.coerce.date(),
    tags: z.array(z.enum(CASE_STUDY_TAGS)).min(2).max(4),
    role: z.string().min(4),
    stack: z.array(z.string().min(2)).min(1),
    outcomes: z.array(z.string().min(10)).min(1),
    confidentiality: z.string().optional(),
    published: z.boolean().default(true)
  })
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(8),
    summary: z.string().min(16),
    date: z.coerce.date(),
    tags: z.array(z.string().min(2)).min(1).max(4),
    published: z.boolean().default(true)
  })
});

export const collections = {
  caseStudies,
  writing
};