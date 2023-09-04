import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'; // Import your slice reducer
import logSlice from './log/logSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    log: logSlice.reducer,
  },
})

export default store;