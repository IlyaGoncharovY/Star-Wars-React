import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";
import {swAPI} from "../api/GetSWApiService";

const rootReducer = combineReducers({
    [swAPI.reducerPath]: swAPI.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(swAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)
