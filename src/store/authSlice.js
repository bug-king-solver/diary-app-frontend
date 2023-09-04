import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        register: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        }
    }
});

export default authSlice;
