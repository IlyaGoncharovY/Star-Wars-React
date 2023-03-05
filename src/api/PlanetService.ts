import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPlanet} from "../types/IPlanet";

type BaseSWType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const planetAPI = createApi({
    reducerPath: "starWarsApiPlanet",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getPlanet: build.query<BaseSWType<IPlanet[]>, number>({
            query: (page) => ({
                url: `planets/`,
                params: {
                    page: page
                }
            })
        })
    })
})
