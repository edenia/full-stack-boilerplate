import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import useStyles from './styles'

const Home: React.FC = () => {
  const { t } = useTranslation('homeRoute')
  const classes = useStyles()

  return <div className={classes.rootHome}>{`${t('welcomeMessage')}`}</div>
}

export default memo(Home)
