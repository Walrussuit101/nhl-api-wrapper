import { z } from 'zod';

export const ConferenceShape = z.object({
    id: z.number(),
    name: z.string(),
    link: z.string(),
    abbreviation: z.string(),
    shortName: z.string(),
    active: z.boolean()
});

export type Conference = z.infer<typeof ConferenceShape>;
