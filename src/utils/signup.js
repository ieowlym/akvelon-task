import axios from 'axios'
import { FIREBASE_API_KEY } from '../constants'

export async function signUp({ email, password }) {
    try {
        const res = await axios
            .post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
                {
                    email,
                    password,
                }
            )
            console.log(res.data)
        return res.data
    } catch (err) {
        if (err.response.data.error.message === "EMAIL_EXISTS") {
            throw new Error("This email already exists")
        }
    }
}