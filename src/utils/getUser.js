import axios from "axios"
import { FIREBASE_API_KEY } from "../constants"

export function getUser(token) {
    return axios
        .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
            { idToken: token }
        )
        .then((res) => res.data)
        // .then((res) => console.log(res.data))
}