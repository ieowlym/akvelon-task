import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { CircularProgress } from "@mui/material"

import { routerService } from "../services/routerService"
import { setCurrentUser, setToken } from "../store/slice/auth"
import { getUser } from "../utils/getUser"

import { Flex } from "./styled/Main"

export const AuthTrue = ({ children }) => {
    const { token, currentUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (token) {
        getUser(token)
            .then((data) => {
                dispatch(setCurrentUser(data.users[0]))
            })
            .catch((err) => {
                const y = "token expired"
                if (y) {
                    dispatch(setToken(null))
                    dispatch(setCurrentUser(null))
                }
            })
        }
    }, [token, dispatch])

    
    if (token && !currentUser) {
        return (
            <Flex
                sx={{
                    height: '100vh',
                    alignItems: 'center',
                }}
            >
                <CircularProgress
                    sx={{
                        margin: 'auto',
                        display: 'block',
                    }}
                />
            </Flex>
        )
    }

    if (token && currentUser) {
        return children;
    }

    return <Navigate to={routerService.login()} />
}