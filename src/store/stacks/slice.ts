import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

interface StackState {
    successStack: string[]; // Define el tipo correcto para cada stack
    errorStack: string[];
    mainStack: string[];
}


const initialState: StackState = {
    successStack: [],
    errorStack: [],
    mainStack: []
}

export const stacksSlice = createSlice({
    name: "CountryStacks",
    initialState,
    reducers: {
        addToSuccess: (state, action: PayloadAction<string>) => {
            state.successStack.push(action.payload);
        },
        removeSuccess: (state) => {
            state.successStack.pop()
        },
        addToMain: (state, action: PayloadAction<string>) => {
            state.mainStack.push(action.payload);
        },
        removeMain: (state) => {
            state.mainStack.pop()
            state.mainStack.pop()
        },
        addToError: (state, action: PayloadAction<string>) => {
            state.errorStack.push(action.payload);
        },
        removeError: (state) => {
            state.errorStack.pop()
        },
    }
})

export const { addToSuccess, removeSuccess, addToMain, removeMain, addToError, removeError } = stacksSlice.actions;

export default stacksSlice.reducer;