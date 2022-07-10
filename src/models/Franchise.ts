import { z } from 'zod';

export const FranchiseShape = z.object({
    franchiseId: z.number(), 
    firstSeasonId: z.number(), 
    lastSeasonId: z.optional(z.number()), 
    mostRecentTeamId: z.number(), 
    teamName: z.string(), 
    locationName: z.string(), 
    link: z.string() 
});

export type Franchise = z.infer<typeof FranchiseShape>;
