import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { Skill, type SkillKey } from '@/constants/skill';

const skills = Object.keys(Skill) as Array<SkillKey>;

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: z.optional(image()),
      skills: z.array(z.enum(skills)).default([]),
    }),
});

export const collections = { blog };
