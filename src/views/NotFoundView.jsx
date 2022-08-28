import { Button, Typography } from "@mui/material"
import { Flex } from "../components/styled/Main"
import { Link } from 'react-router-dom'

import { routerService } from "../services/routerService"

import styled from "@emotion/styled"

const StyledLink = styled(Link)`
    text-decoration: none;
`
export const NotFoundView = () => {
    return (
        <Flex
            sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography variant='h4'>
                Page Not Found
            </Typography>
            <StyledLink to={routerService.index()}>
                <Button variant="contained" color='success'>Home</Button>
            </StyledLink>
        </Flex>
    )
}