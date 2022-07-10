import axios from 'axios';

import { Franchise, FranchiseShape } from './models/Franchise';
import { doQuery, QueryParams } from './models/Query';
import ApiBaseUrl from './ApiBaseUrl';

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
