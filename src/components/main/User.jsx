import { Button, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

import { routerService } from "../../services/routerService"

import { Flex, Wrapper } from "../styled/Main"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
    text-decoration: none;
`

export const User = () => {
    const { currentUser } = useSelector((state) => state.auth)

    console.log(currentUser)

    return (
        <Wrapper>
            {currentUser && 
                <Flex
                    sx={{
                        paddingTop: '16px',
                        gap: '16px',
                    }}
                >
                    <Typography variant='h4'>
                        Welcome, {currentUser.email}
                    </Typography>
                    <StyledLink to={routerService.index()}>
                        <Button variant='contained' color='success'>Explore users</Button>
                    </StyledLink>
                </Flex>
            }
        </Wrapper>
    )
}