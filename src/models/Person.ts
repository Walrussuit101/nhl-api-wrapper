import { z } from 'zod';

export const PersonShape = z.object({
    id: z.number(),
    fullName: z.string(),
    link: z.string(),
    firstName: z.string(), 
    lastName: z.string(),
    primaryNumber: z.string(),
    birthDate: z.string(), 
    currentAge: z.number(),
    birthCity: z.string(),
    birthStateProvince: z.string(), 
    birthCountry: z.string(), 
    nationality: z.string(),
    height: z.string(),
    weight: z.number(),
    active: z.boolean(),
    alternateCaptain: z.boolean(), 
    captain: z.boolean(),
    rookie: z.boolean(),
    shootsCatches: z.string(),
    rosterStatus: z.string(),
    currentTeam: z.object({
        id: z.number(),
        name: z.string(),
        link: z.string()
    }),
    primaryPosition: z.object({
        code: z.string(),
        name: z.string(),
        type: z.string(),
        abbreviation: z.string()
    })
});

export type Person = z.infer<typeof PersonShape>;
