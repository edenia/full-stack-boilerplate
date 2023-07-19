import React, { lazy, Suspense, memo } from 'react'

import useStyles from './styles'

const ThemeModeButton = lazy(() => import('./ThemeModeButton'))
const LanguageButton = lazy(() => import('./LanguageButton'))
const UserButton = lazy(() => import('./UserButton'))
const AuthButton = lazy(() => import('./AuthButton'))

const MenuOption: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.desktopSection}>
      <Suspense fallback={<span>loading ...</span>}>
        <ThemeModeButton />
        <LanguageButton />
        <UserButton />
        <AuthButton />
      </Suspense>
    </div>
  )
}

export default memo(MenuOption)
