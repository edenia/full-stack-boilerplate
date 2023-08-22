import React, { memo } from 'react'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import Link from 'next-intl/link'

import LanguageSelector from '../LanguageSelector'
import Logo from '../../Logo'

import useMenuStyles from './MenuStyles'

type HeaderDesktopProps = {
  asPath: string
  getRouteRef?: (r: { id: number; path: string; name: string }) => string
}

const HeaderDesktopView: React.FC<HeaderDesktopProps> = ({ asPath }) => {
  const classes = useMenuStyles()
  const t = (val: string) => val

  return (
    <div className={(classes.drawerContainer, classes.drawerShowDesktop)}>
      <div className={classes.logoAndMenu}>
        <Link href='/' aria-label='logo-header'>
          <Logo width={200} height={42} />
        </Link>
        <div className={classes.topBarMenu}>{/* here map for routers */}</div>
      </div>
      <div className={classes.languageBox}>
        <div className={classes.contactUs}>
          <Link href='/second-page'>
            <Typography
              variant='body1'
              className={clsx('text', {
                ['linkActive']: asPath === '/contact'
              })}
            >
              {t('secondPage')}
            </Typography>
          </Link>
        </div>
        <LanguageSelector />
      </div>
    </div>
  )
}

export default memo(HeaderDesktopView)
