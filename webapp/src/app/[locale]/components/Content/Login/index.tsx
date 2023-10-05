'use client'

import { memo } from 'react'
import Button from '@mui/material/Button'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

import { useSharedState } from '../../../context'

const Login = () => {
  const [state, { login, logout }] = useSharedState()

  return (
    <div>
      {!state?.user ? (
        <Button id='basic-button' aria-haspopup='true' onClick={login}>
          <FingerprintIcon sx={{ color: 'white' }} />
        </Button>
      ) : (
        <Button id='basic-button' aria-haspopup='true' onClick={logout}>
          {state?.user?.actor.toString()}
        </Button>
      )}
    </div>
  )
}

export default memo(Login)
