import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPlanet} from "../models/IPlanet";

type BaseType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const starWarsApi = createApi({
    reducerPath: "starWarsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        fetchDataSW: build.query<BaseType<IPlanet[]>, number>({
            query: (id: number = 1) => ({
                url: "planets/",
                params: {
                    id: id
                }
            })
        })
    })
})
