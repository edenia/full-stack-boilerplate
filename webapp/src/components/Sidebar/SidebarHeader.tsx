import React, { memo } from 'react'

import { useSharedState } from 'context'

import useStyles from './styles'

const SidebarHeader: React.FC = () => {
  const classes = useStyles()
  const [state] = useSharedState()

  return (
    <div className={classes.sidebarHeader}>
      <img
        src='/logo-edenia.webp'
        alt='menu logo boilerplate'
        className={classes.logo}
        width='182'
        height='30'
      />
      {state?.user?.accountName && (
        <span className={classes.account}>{state?.user?.accountName}</span>
      )}
    </div>
  )
}

export default memo(SidebarHeader)
