import { Button, TextField, Typography } from "@mui/material"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { routerService } from "../../services/routerService"
import { setToken } from "../../store/slice/auth"
import { signIn } from '../../utils/signin'

import { ChangeFormLink, FormText, FormWrapper } from "../styled/Form"

export const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    
    const onSubmit = useCallback(
        async (values) => {
            signIn({ email: values.email, password: values.password })
                .then((data) => {
                    dispatch(setToken(data.idToken))
                    console.log(data)
                    navigate(routerService.index())
                })
                .catch((err) => {
                    alert(err.message)
                })
        },
        [dispatch, navigate]
    )

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} >
            <Typography
                variant='h5'
                sx={{
                    pb: 2,
                }}
            >
                Sign In
            </Typography>
            <TextField
                label="E-mail"
                variant="outlined"
                type="email"
                fullWidth
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Обязательное поле',
                    },
                })}
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...register('password', {
                    required: {
                        value: true,
                        message: 'Обязательное поле',
                    },
                })}
            />
            <Button
                fullWidth
                type="submit"
                variant="outlined"
            >
                Log in
            </Button>
            <FormText>
                Don't have an account? <ChangeFormLink to={routerService.signup()}>Join us</ChangeFormLink>!
            </FormText>
        </FormWrapper>
    )
}