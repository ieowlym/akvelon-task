import { fetchUsers } from "../../utils/fetchUsers"

import { setUsers } from "../slice/users"

export const loadUsers = (page) => async (dispatch) => {
    try {
        const users = await fetchUsers(page)
        dispatch(setUsers(users))
    } catch (e) {
        console.error(e)
    }
}