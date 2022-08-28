import { Box } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Header } from "../components/Header"
import { Home } from "../components/main/Home"
import { User } from "../components/main/User"
import { routerService } from "../services/routerService"
import { AuthTrue } from "../components/AuthTrue"

export const MainView = ({ pageToOpen }) => {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(()=> {
        if (!token) {
            navigate(routerService.login())
        }
    })
    return (
        <AuthTrue>
            <Box>
                <Header />
                {pageToOpen ? <User /> : <Home />}
            </Box>
        </AuthTrue>
    )
}