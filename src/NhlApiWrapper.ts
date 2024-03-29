import axios from 'axios';
import { ZodType } from 'zod';

import { doQuery, QueryParams } from './models/Query';
import ApiBaseUrl from './ApiBaseUrl';

import { Franchise, FranchiseShape } from './models/Franchise';
import { Conference, ConferenceShape } from './models/Conference';
import { Venue, VenueShape } from './models/Venue';
import { Division, DivisionShape } from './models/Division';
import { Season, SeasonShape } from './models/Season';
import { Team, TeamShape, TeamWithRoster, TeamWithRosterShape } from './models/Team';
import { Person, PersonShape } from './models/Person';
import { Standing, StandingShape } from './models/Standing';
import { Award, AwardShape } from './models/Award';

// Can be used for entities that don't require any route params
// ex: API_URL/teams
//     API_URL/divisions
//
// If an entity requires a route param, this cannot be used
// ex: API_URL/people/{id}
const buildGetEntityFunction = <T> (validator: ZodType, urlEntityName: string, resultName: string, expandParam?: string) => {
    return async <K extends T> (queryParams?: QueryParams<K>): Promise<T[]> => {
        const url = (expandParam) ? ApiBaseUrl+urlEntityName+expandParam : ApiBaseUrl+urlEntityName;

        const res = await axios.get(url);
        const entities: K[] = res.data[resultName].map((entity: any) => {
            return validator.parse(entity);
        });

        if (queryParams && entities.length > 0) {
            return doQuery<K>(queryParams, entities);
        }

        return entities;
    }
}

const NhlApiWrapper = {
    franchise: buildGetEntityFunction<Franchise>(FranchiseShape, 'franchises', 'franchises'),
    conference: buildGetEntityFunction<Conference>(ConferenceShape, 'conferences', 'conferences'),
    venue: buildGetEntityFunction<Venue>(VenueShape, 'venues', 'venues'),
    division: buildGetEntityFunction<Division>(DivisionShape, 'divisions', 'divisions'),
    season: buildGetEntityFunction<Season>(SeasonShape, 'seasons', 'seasons'),
    team: buildGetEntityFunction<Team>(TeamShape, 'teams', 'teams'),
    teamWithRoster: buildGetEntityFunction<TeamWithRoster>(TeamWithRosterShape, 'teams',  'teams', '?expand=team.roster'),
    standing: buildGetEntityFunction<Standing>(StandingShape, 'standings', 'records'),
    award: buildGetEntityFunction<Award>(AwardShape, 'awards', 'awards'),
    person: async (id: number): Promise<Person[]> => {
        const url = `${ApiBaseUrl}people/${id}`;
        const res = await axios.get(url);
        const person = res.data['people'].map((person: any) => {
            return PersonShape.parse(person);
        });
        return person;
    }
}

export default NhlApiWrapper;
