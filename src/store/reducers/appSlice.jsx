import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
    isLoggedIn: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
})

export const {toggleDarkMode, login, logout} = appSlice.actions;
export default appSlice.reducer;