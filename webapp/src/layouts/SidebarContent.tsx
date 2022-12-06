import React, { Suspense, lazy } from 'react'

import { routeTypes } from 'types'

import useStyles from './styles'

const Sidebar = lazy(() => import('../components/Sidebar'))
const drawerWidth = 260

const SidebarContent: React.FC<{
  routes: Array<routeTypes.Routes>
  onDrawerToggle: () => void
  mobileOpen: boolean
}> = ({ routes, onDrawerToggle, mobileOpen }) => {
  const classes = useStyles()

  return (
    <div className={classes.drawer}>
      <Suspense fallback={<span>loading ...</span>}>
        <div className={classes.desktopSection}>
          <Sidebar size={drawerWidth} variant='persistent' routes={routes} open />
        </div>
      </Suspense>
      <Suspense fallback={<span>loading ...</span>}>
        <div className={classes.mobileSection}>
          <Sidebar
            size={drawerWidth}
            variant='temporary'
            open={mobileOpen}
            onClose={onDrawerToggle}
            routes={routes}
          />
        </div>
      </Suspense>
    </div>
  )
}

export default SidebarContent
