import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1C3879',
        },
        secondary: {
            main: '#607EAA',
        },
        warning: {
            main: '#E64848',
        },
        success: {
            main: '#256D85',
        },
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                },
            },
        },
    },
})