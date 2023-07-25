import React, { memo } from 'react'
import { IconButton, Link } from '@mui/material'

import Logo from '../../Logo'

import LanguageSelector from '../LanguageSelector'
import MenuIcon from './MenuIcon'
import useMenuStyles from './MenuStyles'

type HeaderMobileProps = {
  open: boolean
  setOpen(previousOpen: boolean): void
  anchorEl: null | HTMLElement
  setAnchorEl(event: EventTarget & HTMLElement): void
  handlerDrawer: () => void
  lng: string
}

const HeaderMobileView: React.FC<HeaderMobileProps> = ({
  handlerDrawer,
  lng
}) => {
  const classes = useMenuStyles()

  return (
    <div className={(classes.drawerContainer, classes.drawerShowMobile)}>
      <Link
        href='/'
        aria-label='logo-header'
        width={160}
        height={35}
        display='flex'
      >
        <Logo width={160} height={35} />
      </Link>
      <div className={classes.leftBox}>
        <div className={classes.languageBox}>
          <LanguageSelector lng={lng} />
        </div>
        <IconButton
          onClick={handlerDrawer}
          role='button'
          aria-label='menu-button'
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default memo(HeaderMobileView)
