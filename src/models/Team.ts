import { z } from 'zod';

export const TeamShape = z.object({
    id: z.number(),
    name: z.string(),
    link: z.string(),
    venue: z.object({
        name: z.string(),
        link: z.string(),
        city: z.string(),
        timeZone: z.object({
            id: z.string(),
            offset: z.number(),
            tz: z.string()
        })
    }),
    abbreviation: z.string(),
    teamName: z.string(),
    locationName: z.string(),
    firstYearOfPlay: z.string(),
    division: z.object({
        id: z.number(),
        name: z.string(),
        nameShort: z.string(),
        link: z.string(),
        abbreviation: z.string()
    }),
    conference: z.object({
        id: z.number(),
        name: z.string(),
        link: z.string()
    }),
    franchise: z.object({
        franchiseId: z.number(),
        teamName: z.string(),
        link: z.string()
    }),
    shortName: z.string(),
    officialSiteUrl: z.string(),
    franchiseId: z.number(),
    active: z.boolean()
});

export type Team = z.infer<typeof TeamShape>;
