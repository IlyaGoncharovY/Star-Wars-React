import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFilms} from "../types/IFilms";

type BaseSWType<T = {}> = {
    count: number
    next: null
    previous: null
    results: T
}
export const filmsAPI = createApi({
    reducerPath: "starWarsApiFilms",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getFilms: build.query<BaseSWType<IFilms[]>, string>({
            query: () => ({
                url: `films/`
            })
        })
    })
})