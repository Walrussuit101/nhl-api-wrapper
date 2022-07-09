import axios from 'axios';
import { z } from 'zod';
import ApiBaseUrl from './ApiBaseUrl';

interface QueryParams<T> {
    where?: {
        [k in keyof T]: T[k]
    },
    all?: boolean,
    first?: boolean,
    last?: boolean
}

const doQuery = <T> (params: QueryParams<T>, data: Array<T>): T | Array<T> => {
    if (params.first) {
        return data[0];
    }

    if (params.last) {
        return data[data.length - 1];
    }

    if (params.all) {
        return data;
    } 

    if (params.where) {
        // TODO: check keys/values length are divisble by 2 / same length
        // (to ensure every key has a value)

        const keys = Object.keys(params.where);
        const values = Object.values(params.where);
        const filteredData: Array<T> = [];

        keys.forEach((key, i) => {
            data.forEach(record => {
                if (record[key] === values[i]) {
                    filteredData.push(record);
                }
            });
        });
        
        return filteredData;
    }

    return data;
}

const FranchiseShape = z.object({
    franchiseId: z.number(), 
    firstSeasonId: z.number(), 
    lastSeasonId: z.optional(z.number()), 
    mostRecentTeamId: z.number(), 
    teamName: z.string(), 
    locationName: z.string(), 
    link: z.string() 
});
type Franchise = z.infer<typeof FranchiseShape>;

const NhlApiWrapper = {
    franchise: async (queryParams?: QueryParams<Franchise>): Promise<Franchise[] | Franchise> => {
        const res = await axios.get(ApiBaseUrl+'franchises');
        const franchises = res.data.franchises.map((franchise: any) => {
            return FranchiseShape.parse(franchise);
        }) 

        if (queryParams && franchises.length > 0) {
            return doQuery<Franchise>(queryParams, franchises);
        }

        return franchises;
    }
}

export default NhlApiWrapper;
