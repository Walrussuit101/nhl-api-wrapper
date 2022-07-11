import { z } from 'zod';

export const SeasonShape = z.object({
    seasonId: z.string(),
    regularSeasonStartDate: z.string(), 
    regularSeasonEndDate: z.string(),
    seasonEndDate: z.string(),
    numberOfGames: z.number(),
    tiesInUse: z.boolean(),
    olympicsParticipation: z.boolean(),
    conferencesInUse: z.boolean(),
    divisionsInUse: z.boolean(),
    wildCardInUse: z.boolean() 
});

export type Season = z.infer<typeof SeasonShape>;
