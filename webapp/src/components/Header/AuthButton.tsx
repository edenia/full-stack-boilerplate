import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import ExitIcon from '@mui/icons-material/ExitToApp'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

import { useSharedState } from 'context'

import useStyles from './styles'

const AuthButton: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')
  const [state, { login, logout }] = useSharedState()

  const handleSignOut = () => {
    logout()
    // navigate("/");
  }

  const handleSignIn = () => {
    login('anchor')
    // navigate("/");
  }

  if (state.user)
    return (
      <Button className={classes.colorBtn} startIcon={<ExitIcon />} onClick={handleSignOut}>
        <span className={classes.btnLabel}>{`${t('logout')}`}</span>
      </Button>
    )

  return (
    <Button className={classes.colorBtn} startIcon={<FingerprintIcon />} onClick={handleSignIn}>
      <span className={classes.btnLabel}> {`${t('login')}`}</span>
    </Button>
  )
}

export default memo(AuthButton)
