export interface QueryParams<T> {
    where?: {
        // only allow fields, and their types, of type T
        [k in keyof T]: T[k]
    },
    first?: boolean,
    last?: boolean
}

export const doQuery = <T> (params: QueryParams<T>, data: Array<T>): T | Array<T> => {
    if (params.first) {
        return data[0];
    }

    if (params.last) {
        return data[data.length - 1];
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
