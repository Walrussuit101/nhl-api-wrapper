import { z } from 'zod';

export const AwardShape = z.object({
    name: z.string(),
    shortName: z.string(),
    description: z.string(),
    recipientType: z.string(),
    history: z.optional(z.string()),
    imageUrl: z.string(),
    homePageUrl: z.string(),
    link: z.string()
});

export type Award = z.infer<typeof AwardShape>;
