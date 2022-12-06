import React, { memo } from 'react'
import Button from '@mui/material/Button'
import AccountIcon from '@mui/icons-material/AccountCircle'

import { useSharedState } from 'context'

import useStyles from './styles'

const UserButton: React.FC = () => {
  const classes = useStyles()
  const [state] = useSharedState()

  if (!state.user) return <></>

  return (
    <Button className={classes.colorBtn} startIcon={<AccountIcon />}>
      {state.user.accountName}
    </Button>
  )
}

export default memo(UserButton)
