import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {planetAPI} from "../api/PlanetService";
import {setupListeners} from "@reduxjs/toolkit/query";
import {peopleAPI} from "../api/PeopleService";
import {filmsAPI} from "../api/FilmsService";
import {starshipsAPI} from "../api/StarshipsService";
import {vehiclesAPI} from "../api/VehiclesService";
import {speciesAPI} from "../api/SpeciesService";

const rootReducer = combineReducers({
    [planetAPI.reducerPath]: planetAPI.reducer,
    [peopleAPI.reducerPath]: peopleAPI.reducer,
    [filmsAPI.reducerPath]: filmsAPI.reducer,
    [starshipsAPI.reducerPath]: starshipsAPI.reducer,
    [vehiclesAPI.reducerPath]: vehiclesAPI.reducer,
    [speciesAPI.reducerPath]: speciesAPI.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(planetAPI.middleware,
            peopleAPI.middleware,
            filmsAPI.middleware,
            starshipsAPI.middleware,
            vehiclesAPI.middleware,
            speciesAPI.middleware,)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)
