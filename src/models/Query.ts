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
        
        const keys = Object.keys(params.where);
        const values = Object.values(params.where);
        const filteredData: T[] = [];

        // compare JSON strings to allow nested object comparison (nested up to 1 level)
        keys.forEach((key, i) => {
            const valueString  = JSON.stringify(values[i]).slice(1, -1); // remove top level {} for comparison

            data.forEach(record => {
                const recordString = JSON.stringify(record[key]);

                if (recordString.includes(valueString)) {
                    filteredData.push(record);
                }
            });
        });
        
        return filteredData;
    }

    return data;
}
