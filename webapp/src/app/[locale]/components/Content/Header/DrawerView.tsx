import React, { memo } from 'react'
import { List, Drawer } from '@mui/material'

import useDrawerStyles from './DrawerStyles'
import Login from '../Login'

type DrawerContentProps = {
  isOpen: boolean
  handlerDrawer: () => void
  asPath: string
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  isOpen,
  handlerDrawer
}) => {
  const classes = useDrawerStyles()

  return (
    <Drawer
      className={classes.drawer}
      anchor={'right'}
      open={isOpen}
      onClose={handlerDrawer}
    >
      <div className={classes.drawerContent}>
        <List>
          <Login />
        </List>
      </div>
    </Drawer>
  )
}

export default memo(DrawerContent)
