import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ISpecies} from "../types/ISpecies";

type BaseSWType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const speciesAPI = createApi({
    reducerPath: "starWarsApiSpecies",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getSpecies: build.query<BaseSWType<ISpecies[]>, number>({
            query: (page) => ({
                url: `species/`,
                params: {
                    page: page
                }
            })
        })
    })
})