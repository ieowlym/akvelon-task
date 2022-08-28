import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Box, Grid } from "@mui/material"

import { SignIn } from "../components/auth/SignIn"
import { SignUp } from "../components/auth/SignUp"
import { routerService } from "../services/routerService"

export const AuthView = ({ pageToOpen }) => {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    useEffect(()=> {
        if (token) {
            navigate(routerService.index())
        }
    })

    return (
        <Box>
            {!token &&
                <Grid
                    container
                    spacing={0}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                            backgroundColor: '#607EAA',
                        }}
                    >
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {pageToOpen ? <SignIn /> : <SignUp />}
                    </Grid>
                </Grid>
            }
        </Box>
    )
}