import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'context/user/infrastructure/userSlice'
export default configureStore({
  reducer: {
    user: userReducer
  }
})
