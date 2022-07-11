import axios from 'axios';
import { ZodType } from 'zod';

import { doQuery, QueryParams } from './models/Query';
import ApiBaseUrl from './ApiBaseUrl';

import { Franchise, FranchiseShape } from './models/Franchise';
import { Conference, ConferenceShape } from './models/Conference';
import { Venue, VenueShape } from './models/Venue';
import { Division, DivisionShape } from './models/Division';

const buildGetEntityFunction = <T> (validator: ZodType, urlEntityName: string) => {
    return async <K extends T> (queryParams?: QueryParams<K>): Promise<K[] | K> => {
        const res = await axios.get(ApiBaseUrl+urlEntityName);
        const entities = res.data[urlEntityName].map((entity: any) => {
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
    division: buildGetEntityFunction<Division>(DivisionShape, 'divisions')
}

export default NhlApiWrapper;
