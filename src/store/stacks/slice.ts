import { createSlice } from "@reduxjs/toolkit/react";

export interface Stack {
    name: string;
    list: [];
}

const initialState = {
    successStack: [],
    errorStack: []
}

export const stacksSlice = createSlice({
    name: "CountryStacks",
    initialState,
    reducers: {
        removeSuccess: (state) => {
            return state.successStack.pop()
        }
    }
})

export default stacksSlice.reducer;