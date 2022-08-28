import axios from "axios"
import { API_URL } from "../constants"

export async function fetchUsers(page) {
    const res = await axios
        .get(`${API_URL}users?page=${page}`)
    return res.data
}