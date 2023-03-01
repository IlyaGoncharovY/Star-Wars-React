import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {starWarsApi} from "../API/SWService";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [starWarsApi.reducerPath]: starWarsApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starWarsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)
