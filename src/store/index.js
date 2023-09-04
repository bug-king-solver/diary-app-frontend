import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'; // Import your slice reducer

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
})

export default store;