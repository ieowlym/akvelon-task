import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: {
      data: [],
      page: null,
    },
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setPage(state, action) {
      state.users.page = action.payload
      console.log('i work')
    }
  },
})

export const { setUsers, setPage } = usersSlice.actions

export const usersReducer = usersSlice.reducer
