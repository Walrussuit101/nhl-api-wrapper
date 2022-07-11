import { z } from 'zod';

export const VenueShape = z.object({
    id: z.number(),
    name: z.string(),
    link: z.string(),
    appEnabled: z.string()
});

export type Venue = z.infer<typeof VenueShape>;
