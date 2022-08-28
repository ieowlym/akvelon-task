import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./slice/auth"
import { usersReducer } from "./slice/users"

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
})

export default store
