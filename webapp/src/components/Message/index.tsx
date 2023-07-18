import React, { useEffect, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

import { useSharedState } from 'context'

import useStyles from './styles'

const Message = () => {
  const [open, setOpen] = useState(false)
  const [state, { hideMessage }] = useSharedState()
  const classes = useStyles()

  const handleClose = (reason: string) => {
    if (reason === 'clickaway') return

    setOpen(false)
    setTimeout(() => hideMessage(), 1000)
  }

  useEffect(() => {
    if (open === !!state.message) return

    setOpen(!!state.message)
  }, [state, open])

  return (
    <Snackbar
      open={open}
      autoHideDuration={state.message?.autoHideDuration || 6000}
      onClose={(_, reason) => handleClose(reason)}
      anchorOrigin={
        state.message?.anchorOrigin || {
          vertical: 'bottom',
          horizontal: 'center',
        }
      }
    >
      <Alert
        severity={state.message?.type || 'info'}
        variant='filled'
        onClose={() => console.log('close Alert')}
        className={classes.alert}
        elevation={6}
      >
        {state.message?.content}
      </Alert>
    </Snackbar>
  )
}

export default Message
