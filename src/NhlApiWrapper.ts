import axios from 'axios';
import { z } from 'zod';
import ApiBaseUrl from './ApiBaseUrl';

interface QueryParams<T> {
    where?: {
        [k in keyof T]: any
    }
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
    franchise: async (queryParams?: QueryParams<Franchise>): Promise<Franchise[]> => {
        const res = await axios.get(ApiBaseUrl+'franchises');
        const franchises = res.data.franchises.map((franchise: any) => {
            return FranchiseShape.parse(franchise);
        }) 

        console.log(queryParams);

        return franchises;
    }
}

export default NhlApiWrapper;
