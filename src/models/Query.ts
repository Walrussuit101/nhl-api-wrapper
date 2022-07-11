export interface QueryParams<T> {
    where?: {
        // only allow fields, and their types, of type T
        [k in keyof T]: T[k]
    }
}

export const doQuery = <T> (params: QueryParams<T>, data: T[]): T[] => {
    if (params.where) {
        // TODO: check keys/values length are divisble by 2 / same length
        // (to ensure every key has a value)
        
        // TODO: handle complex where objects:
        // ex:
        // where {
        //     franchise: {
        //          id: 1
        //     } 
        // }

        const keys = Object.keys(params.where);
        const values = Object.values(params.where);
        const filteredData: T[] = [];

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
