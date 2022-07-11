import { z } from 'zod';

export const DivisionShape = z.object({
    id: z.number(),
    name: z.string(),
    link: z.string(),
    abbreviation: z.string(),
    conference: z.object({
        id: z.number(),
        name: z.string(),
        link: z.string()
    }),
    active: z.boolean() 
});

export type Division = z.infer<typeof DivisionShape>;
