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

const buildGetEntityFunction = <T> (validator: ZodType, urlEntityName: string, expandParam?: string) => {
    return async <K extends T> (queryParams?: QueryParams<K>): Promise<T[]> => {
        const url = (expandParam) ? ApiBaseUrl+urlEntityName+expandParam : ApiBaseUrl+urlEntityName;

        const res = await axios.get(url);
        const entities: K[] = res.data[urlEntityName].map((entity: any) => {
            return validator.parse(entity);
        });

        if (queryParams && entities.length > 0) {
            return doQuery<K>(queryParams, entities);
        }

        return entities;
    }
}

const NhlApiWrapper = {
    franchise: buildGetEntityFunction<Franchise>(FranchiseShape, 'franchises'),
    conference: buildGetEntityFunction<Conference>(ConferenceShape, 'conferences'),
    venue: buildGetEntityFunction<Venue>(VenueShape, 'venues'),
    division: buildGetEntityFunction<Division>(DivisionShape, 'divisions'),
    season: buildGetEntityFunction<Season>(SeasonShape, 'seasons'),
    team: buildGetEntityFunction<Team>(TeamShape, 'teams'),
    teamWithRoster: buildGetEntityFunction<TeamWithRoster>(TeamWithRosterShape, 'teams', '?expand=team.roster')
    // TODO: figure out how to do /people/{id} route (id is required cannot GET just /people)
    // person: buildGetEntityFunction<Person>(PersonShape, 'people')
}

export default NhlApiWrapper;
