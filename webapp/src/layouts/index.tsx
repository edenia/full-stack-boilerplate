import React, { Suspense, lazy, useState } from 'react'

import { routeTypes } from 'types'

import useStyles from './styles'

const SidebarContent = lazy(() => import('./SidebarContent'))
const MainContent = lazy(() => import('./MainContent'))

const Layout: React.FC<{
  children: React.ReactNode
  routes: Array<routeTypes.Routes>
}> = ({ children, routes }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <Suspense fallback={<span>loading ...</span>}>
        <SidebarContent
          routes={routes}
          onDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <MainContent onDrawerToggle={handleDrawerToggle}>{children}</MainContent>
      </Suspense>
    </div>
  )
}

export default Layout
