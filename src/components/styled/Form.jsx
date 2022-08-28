import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const FormWrapper = styled('form')`
    max-width: 400px;
    background-color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 2px;
`

export const FormText = styled(Typography)`
    margin-top: 8px;
    color: #666;
    text-align: start;
`

export const ChangeFormLink = styled(Link)`
    text-decoration: none;
`