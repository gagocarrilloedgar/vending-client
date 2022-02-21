import { createSlice } from '@reduxjs/toolkit'
import User from 'context/user/domain/types'

const initialState = {
  user: User,
  transactions: [],
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, updatePassword } = userSlice.actions

export default userSlice.reducer
