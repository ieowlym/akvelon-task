import { Button, TextField, Typography } from "@mui/material"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


import { routerService } from "../../services/routerService"
import { getInputState } from "../../utils/validation"
import { signUp } from '../../utils/signup'

import { ChangeFormLink, FormText, FormWrapper } from "../styled/Form"

export const SignUp = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState,
        watch,
    } = useForm()
    const current = watch('password', '')

    const onSubmit = useCallback(
        async (values) => {
            signUp({ email: values.email, password: values.password })
                .then(() => {
                    navigate(routerService.login())
                })
                .catch((err) => {
                    alert(err.message)
                })
        },
        [navigate]
    )

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} >
            <Typography
                variant='h5'
                sx={{
                    pb: 2,
                }}
            >
                Registration
            </Typography>

            <TextField
                label="E-mail"
                variant="outlined"
                type="email"
                fullWidth
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Please write your email',
                    },
                })}
              {...getInputState(formState, "email")}
            />

            <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                {...register('password', {
                    required: {
                        value: true,
                        message: 'Required field',
                    },
                    minLength: 8,
                })}
                {...getInputState(formState, "password")}
            />
            <TextField
                label="Confirm password"
                variant="outlined"
                type="password"
                fullWidth
                {...register('password_confirm', {
                    required: {
                        value: true,
                        message: 'Required field',
                    },
                    validate: value =>
                        value === current || "The passwords do not match",
                })}
                {...getInputState(formState, "password_confirm")}
            />

            <Button
                fullWidth
                type="submit"
                variant="outlined"
            >
                Sign up
            </Button>
            <FormText>
                Already have an account? <ChangeFormLink to={routerService.login()}>Log in</ChangeFormLink>!
            </FormText>

        </FormWrapper>
    )
}