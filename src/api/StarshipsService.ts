import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IStarships} from "../types/IStarships";

type BaseSWType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const starshipsAPI = createApi({
    reducerPath: "starWarsApiStarships",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getStarships: build.query<BaseSWType<IStarships[]>, number>({
            query: (page) => ({
                url: `starships/`,
                params: {
                    page: page
                }
            })
        })
    })
})