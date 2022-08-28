import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import { useDispatch } from "react-redux"

import { Wrapper } from "./styled/Main"
import { logout } from "../store/slice/auth"
import { useNavigate } from "react-router-dom"
import { routerService } from "../services/routerService"

export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <AppBar position="static" color='secondary'>
            <Wrapper>
                <Toolbar>
                    <Typography variant="h6">
                        Home
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={() => navigate(routerService.user())}>
                        <PersonIcon />
                    </Button>
                    <Button color="inherit" onClick={() => dispatch(logout())}>
                        <LogoutIcon />
                    </Button>
                </Toolbar>
            </Wrapper>
        </AppBar>
    )
}