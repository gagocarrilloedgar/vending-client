import { createSlice } from '@reduxjs/toolkit'
import User from 'user/domain/type'

const initialState = {
  user: User,
  isLoading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, updatePassword } = userSlice.actions

export default userSlice.reducer
