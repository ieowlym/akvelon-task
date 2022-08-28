import { createSlice } from "@reduxjs/toolkit"
import { tokenStorage } from "../../constants"

export const authSlice = createSlice({
    name: 'currentUser',
    initialState: {
        token: localStorage.getItem(tokenStorage),
        currentUser: null,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            localStorage.setItem(tokenStorage, action.payload)
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        logout(state) {
            state.token = null
            localStorage.clear()
            state.currentUser = null
        },
    },
})
export const { setToken, setCurrentUser, logout } = authSlice.actions

export const authReducer = authSlice.reducer