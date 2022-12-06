import React, { Suspense, lazy, useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ThemeProvider from '@mui/styles/ThemeProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { useSharedState } from './context'
import { routeTypes } from './types'
import routes from './routes'
import theme from './theme'

const Layout = lazy(() => import('./layouts'))

const App = () => {
  const [state] = useSharedState()

  const renderRoute = ({ component: Component, ...route }: routeTypes.Routes, index: number) => {
    if (!Component) return

    return <Route key={`path-${route.path}-${index}`} path={route.path} element={<Component />} />
  }

  const userRoutes = useMemo(
    () => routes(state.user?.role || 'guest'),

    [state.user],
  )

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Suspense fallback={<span>loading ...</span>}>
            <Layout routes={userRoutes.sidebar}>
              <Routes>{userRoutes.browser.map(renderRoute)}</Routes>
            </Layout>
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
