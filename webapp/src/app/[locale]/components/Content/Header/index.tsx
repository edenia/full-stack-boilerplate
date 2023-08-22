import React, { useState, memo } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AppBar, Toolbar } from '@mui/material'

import HeaderDesktopView from './DesktopView'
import HeaderMobileView from './MobileView'
import DrawerContent from './DrawerView'
import useStyles from './styles'

type HeaderProps = {
  open: boolean
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
  setAnchorEl
}) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handlerDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar
        className={clsx(classes.drawerPaper, classes.topBarStyle)}
        onClick={onclick}
      >
        <div className={classes.menuContainer}>
          <HeaderDesktopView asPath={pathname} />
          <HeaderMobileView
            open={open}
            setAnchorEl={setAnchorEl}
            setOpen={setOpen}
            anchorEl={anchorEl}
            handlerDrawer={handlerDrawer}
          />
          <DrawerContent
            isOpen={isOpen}
            handlerDrawer={handlerDrawer}
            asPath={pathname}
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
