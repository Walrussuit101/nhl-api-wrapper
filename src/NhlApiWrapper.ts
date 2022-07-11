import axios from 'axios';
import { ZodType } from 'zod';

import { Franchise, FranchiseShape } from './models/Franchise';
import { Conference, ConferenceShape } from './models/Conference';
import { doQuery, QueryParams } from './models/Query';
import ApiBaseUrl from './ApiBaseUrl';

const buildGetEntityFunction = <T> (validator: ZodType, urlEntityName: string) => {
    return async <K extends T> (queryParams?: QueryParams<K>): Promise<K[] | K> => {
        const res = await axios.get(ApiBaseUrl+urlEntityName);
        const entities = res.data[urlEntityName].map((franchise: any) => {
            return validator.parse(franchise);
        }) 

        if (queryParams && entities.length > 0) {
            return doQuery<K>(queryParams, entities);
        }

        return entities;
    }
}

const NhlApiWrapper = {
    franchise: buildGetEntityFunction<Franchise>(FranchiseShape, 'franchises'),
    conference: buildGetEntityFunction<Conference>(ConferenceShape, 'conferences')
}

export default NhlApiWrapper;
