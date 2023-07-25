import React, { memo } from 'react'
import { List, Drawer } from '@mui/material'

import useTranslation from 'app/i18n'

import useDrawerStyles from './DrawerStyles'

type DrawerContentProps = {
  isOpen: boolean
  handlerDrawer: () => void
  asPath: string
  lng: string
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  isOpen,
  handlerDrawer,
  lng
}) => {
  const { t } = useTranslation(lng, 'common')
  const classes = useDrawerStyles()

  if (!t) return <h1>Loading..</h1>

  return (
    <Drawer
      className={classes.drawer}
      anchor={'right'}
      open={isOpen}
      onClose={handlerDrawer}
    >
      <div className={classes.drawerContent}>
        <List></List>
      </div>
    </Drawer>
  )
}

export default memo(DrawerContent)
