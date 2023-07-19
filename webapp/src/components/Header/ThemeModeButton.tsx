import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useSharedState } from 'context'

import useStyles from './styles'

const ThemeModeButton: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')
  const [state, { setSwitchMode }] = useSharedState()

  const handleSwitchThemeMode = () => {
    setSwitchMode(!state.useDarkMode)
  }

  return (
    <Button
      className={classes.colorBtn}
      startIcon={state.useDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={handleSwitchThemeMode}
    >
      <span className={classes.btnLabel}>{`${t(
        state.useDarkMode ? 'lightMode' : 'darkMode',
      )}`}</span>
    </Button>
  )
}

export default memo(ThemeModeButton)
