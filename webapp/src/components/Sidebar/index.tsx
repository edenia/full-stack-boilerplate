import React, { memo, lazy, Suspense } from 'react'
import { Drawer } from '@mui/material'

import { routeTypes } from 'types'

const SidebarHeader = lazy(() => import('./SidebarHeader'))
const RoutesLink = lazy(() => import('./RoutesLink'))

type SidebarType = {
  onClose?(): void
  variant: 'permanent' | 'persistent' | 'temporary' | undefined
  size: number
  routes: Array<routeTypes.Routes>
  open?: boolean
}

const Sidebar: React.FC<SidebarType> = ({ routes, size, variant, open, onClose }) => (
  <Drawer sx={{ width: size }} variant={variant} open={open} onClose={onClose}>
    <Suspense fallback={<span>loading ...</span>}>
      <SidebarHeader />
      <RoutesLink routes={routes} />
    </Suspense>
  </Drawer>
)

export default memo(Sidebar)
