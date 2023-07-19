import React, { memo, Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { routeTypes } from 'types'

import useStyles from './styles'

const IconMenu = lazy(() => import('./IconMenu'))

const RoutesLink: React.FC<{ routes: Array<routeTypes.Routes> }> = ({ routes }) => {
  const classes = useStyles()
  const { t } = useTranslation('routes')

  return (
    <div className={classes.scrollbar}>
      {routes.map((category: routeTypes.Routes, index: number) => (
        <NavLink
          key={`${category.name}${index}`}
          to={category?.path || ''}
          className={classes.navLink}
        >
          <Suspense fallback={<span>loading ...</span>}>
            <IconMenu icon={category.icon} />
          </Suspense>
          <span className={classes.navLabel}>{`${t(category?.name || '')}`}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default memo(RoutesLink)
