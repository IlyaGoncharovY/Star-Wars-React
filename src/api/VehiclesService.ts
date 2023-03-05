import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IVehicles} from "../types/IVehicles";

type BaseSWType<T = {}> = {
    count: number
    next: string
    previous: null
    results: T
}
export const vehiclesAPI = createApi({
    reducerPath: "starWarsApiVehicles",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://swapi.py4e.com/api/"
    }),
    endpoints: (build) => ({
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