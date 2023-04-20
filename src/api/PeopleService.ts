import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPeople} from "../types/IPeople";

type BaseSWType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const peopleAPI = createApi({
    reducerPath: "starWarsApiPeople",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getPeople: build.query<BaseSWType<IPeople[]>, number>({
            query: (page) => ({
                url: `people/`,
                params: {
                    page: page
                }
            })
        }),
        // getPilots: build.query<IPeople, string>({
        //     query: (id: string) => `people/${id}/`,
        // })
    })
})