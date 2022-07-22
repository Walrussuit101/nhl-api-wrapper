import { z } from 'zod';

export const StandingShape = z.object({
    standingsType: z.string(),
    league: z.object({
        id: z.number(),
        name: z.string(),
        link: z.string()
    }),
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
    teamRecords: z.object({
        team: z.object({
            id: z.number(),
            name: z.string(),
            link: z.string()
        }),
        leagueRecord: z.object({
            wins: z.number(),
            losses: z.number(),
            ot: z.number(),
            type: z.string()
        }),
        regulationWins: z.number(),
        goalsAgainst: z.number(),
        goalsScored: z.number(),
        points: z.number(),
        divisionRank: z.string(),
        divisionL10Rank: z.string(),
        divisionRoadRank: z.string(),
        divisionHomeRank: z.string(),
        conferenceRank: z.string(),
        conferenceL10Rank: z.string(),
        conferenceRoadRank: z.string(),
        conferenceHomeRank: z.string(),
        leagueRank: z.string(),
        leagueL10Rank: z.string(),
        leagueRoadRank: z.string(),
        leagueHomeRank: z.string(),
        wildCardRank: z.string(),
        row: z.number(),
        gamesPlayed: z.number(),
        streak: z.object({
            streakType: z.string(),
            streakNumber: z.number(),
            streakCode: z.string()
        }),
        clinchIndicator: z.optional(z.string()),
        pointsPercentage: z.number(),
        ppDivisionRank: z.string(),
        ppConferenceRank: z.string(),
        ppLeagueRank: z.string(),
        lastUpdated: z.string()
    }).array()
});

export type Standing = z.infer<typeof StandingShape>;
