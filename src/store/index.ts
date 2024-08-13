import { configureStore } from "@reduxjs/toolkit";
import stacksReducer from "./stacks/slice";

export const store = configureStore({
    reducer: {
        stacks: stacksReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch