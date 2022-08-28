import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Box, Grid } from "@mui/material"

import { loadUsers } from "../../store/actions/loadUsers"

import { Wrapper } from "../styled/Main"
import { UserItem } from "./UserItem"

export const Home = () => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.users)

    const load = useCallback(() => {
        dispatch(loadUsers(page))
    }, [dispatch, page])

    useEffect(() => {
        load()
    }, [load])

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <Wrapper >
            {users.data && (
                <Box sx={{ paddingTop: '16px' }}>
                    <Grid container spacing={3}>
                        {users.data.map((user, index) => (
                            <Grid item key={index} xs={12} md={6}>
                                <UserItem  user={user}/>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Stack spacing={2} sx={{ margin: '0 0 32px' }}>
                                <Pagination
                                    count={users.total_pages}
                                    variant="outlined"
                                    color="secondary"
                                    page={users.page || 1}
                                    onChange={handleChange}
                                    sx={{ margin: 'auto' }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Wrapper>
   )
}