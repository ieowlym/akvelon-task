import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"


import { Flex } from "../styled/Main"

const Avatar = styled('img')`
    object-fit: cover;
    min-height: 100px;
    max-width: 100px;
    border-radius: 50%;
`

export const UserItem = ({ user }) => {
    return (
        <Flex
            sx={{
                alignItems: 'center',
                gap: '16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '8px',
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                }
            }}
        >
            <Avatar src={user.avatar} alt={user.first_name} />
            <Box>
                <Typography variant='h5'>
                    {user.first_name}
                </Typography>
                <Typography variant='h6'>
                    {user.last_name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '16px',
                        color: '#1C3879',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    }}
                >
                    {user.email}
                </Typography>
            </Box>
            <Box sx={{flexGrow: 1}} />
            <Flex
                sx={{
                    flexDirection: {
                        xs: 'row',
                        sm: 'column',
                    },
                    gap: '16px',
                    padding: {
                        xs: '0 0 8px',
                        sm: '0 8px 0 0',
                    },
                }}
            >
            </Flex>
        </Flex>
    )
}