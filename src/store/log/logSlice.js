import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
    name: 'log',
    initialState: {
        logs: [],
        log: null
    },
    reducers: {
        addLog: (state, action) => {
            action.payload.id = state.logs.length + 1;
            state.logs.push(action.payload);
        },
        removeLog: (state, action) => {
            state.logs = state.logs.filter(log => log.id !== action.payload);
        },
        findLog: (state, action) => {
            state.log = state.logs.find(log => log.id === action.payload)
        },
        updateLog: (state, action) => {
            state.logs = state.logs.map((log, index) => index === action.payload.id - 1 ? action.payload.data : log)
        }
    }
}) 

export default logSlice;