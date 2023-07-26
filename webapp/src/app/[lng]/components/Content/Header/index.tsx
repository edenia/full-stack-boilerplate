import React, { useState, memo } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AppBar, Toolbar, Skeleton } from '@mui/material'

import useTranslation from 'app/i18n'

import HeaderDesktopView from './DesktopView'
import HeaderMobileView from './MobileView'
import DrawerContent from './DrawerView'
import useStyles from './styles'

type HeaderProps = {
  open: boolean
  lng: string
  onclick(): void
  setOpen(previousOpen: boolean): void
  anchorEl: null | HTMLElement
  setAnchorEl(event: EventTarget & HTMLElement): void
}

const Header: React.FC<HeaderProps> = ({
  open,
  setOpen,
  onclick,
  anchorEl,
  setAnchorEl,
  lng
}) => {
  const classes = useStyles()
  const { t } = useTranslation(lng, 'common')
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handlerDrawer = () => {
    setIsOpen(!isOpen)
  }

  if (!t) return <Skeleton variant='rounded' height={60} />

  return (
    <AppBar className={classes.appBar}>
      <Toolbar
        className={clsx(classes.drawerPaper, classes.topBarStyle)}
        onClick={onclick}
      >
        <div className={classes.menuContainer}>
          <HeaderDesktopView asPath={pathname} lng={lng} />
          <HeaderMobileView
            open={open}
            setAnchorEl={setAnchorEl}
            setOpen={setOpen}
            anchorEl={anchorEl}
            lng={lng}
            handlerDrawer={handlerDrawer}
          />
          <DrawerContent
            isOpen={isOpen}
            handlerDrawer={handlerDrawer}
            asPath={pathname}
            lng={lng}
          />
        </div>
      </Toolbar>
      <div className={classes.bottomBarStyle}>
        <div
          role='button'
          tabIndex={0}
          onClick={onclick}
          onKeyDown={onclick}
          className={classes.containerSubMenuItems}
        ></div>
        {open && <span className={classes.triangle} />}
      </div>
    </AppBar>
  )
}

export default memo(Header)
