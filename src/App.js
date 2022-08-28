import { Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material"
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { globalStyles } from "./styles/global"
import { theme } from "./styles/theme"
import { AuthView } from "./views/AuthView"
import { routerService } from "./services/routerService"
import { MainView } from "./views/MainView"
import { NotFoundView } from "./views/NotFoundView"

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles} />
                <Routes>
                    <Route
                        path={routerService.index()}
                        element={<MainView pageToOpen={0} />}
                    />
                    <Route
                        path={routerService.user()}
                        element={<MainView pageToOpen={1} />}
                    />
                    <Route
                        path={routerService.signup()}
                        element={<AuthView pageToOpen={0} />}
                    />
                    <Route
                        path={routerService.login()}
                        element={<AuthView pageToOpen={1} />}
                    />
                    <Route
                        path='*'
                        element={<NotFoundView />}
                    />
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App