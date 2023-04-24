import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFilms} from "../types/IFilms";
import {IPeople} from "../types/IPeople";
import {IPlanet} from "../types/IPlanet";
import {ISpecies} from "../types/ISpecies";
import {IStarships} from "../types/IStarships";
import {IVehicles} from "../types/IVehicles";

type BaseSWType<T = {}> = {
    count: number
    next: null
    previous: null
    results: T
}
export const swAPI = createApi({
    reducerPath: "starWarsApiFilms",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
        getFilms: build.query<BaseSWType<IFilms[]>, string>({
            query: () => ({
                url: `films/`
            })
        }),
        getPeoples: build.query<BaseSWType<IPeople[]>, number>({
            query: (page) => ({
                url: `people/`,
                params: {
                    page: page
                }
            })
        }),
        getPlanets: build.query<BaseSWType<IPlanet[]>, number>({
            query: (page) => ({
                url: `planets/`,
                params: {
                    page: page
                }
            })
        }),
        getHomeworld: build.query({
            query: (url) => url.replace(/^http:/, 'https:'),
        }),
        getSpecies: build.query<BaseSWType<ISpecies[]>, number>({
            query: (page) => ({
                url: `species/`,
                params: {
                    page: page
                }
            })
        }),
        getStarships: build.query<BaseSWType<IStarships[]>, number>({
            query: (page) => ({
                url: `starships/`,
                params: {
                    page: page
                }
            })
        }),
        getVehicles: build.query<BaseSWType<IVehicles[]>, number>({
            query: (page) => ({
                url: `vehicles/`,
                params: {
                    page: page
                }
            })
        })
    })
})