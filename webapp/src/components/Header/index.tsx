import React, { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import useStyles from './styles'

const MenuOption = lazy(() => import('./MenuOption'))

const Header = ({ onDrawerToggle }: { onDrawerToggle: () => void }) => {
  const classes = useStyles()
  const { t } = useTranslation('routes')
  const location = useLocation()

  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.mobileSection}>
          <IconButton aria-label='Open drawer' onClick={onDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>
        <h4 className={classes.typography}>{t(`${location.pathname}>heading`, '')}</h4>
        <Suspense fallback={<span>loading ...</span>}>
          <MenuOption />
        </Suspense>
      </Toolbar>
    </AppBar>
  )
}

export default React.memo(Header)
