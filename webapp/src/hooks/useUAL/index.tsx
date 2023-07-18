/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useCallback, useState } from 'react'
import { UAL, UALError, UALErrorType } from 'universal-authenticator-library'

import { ualTypes } from 'types'

const DEFAULT_STATUS: ualTypes.UALStateType = {
  activeUser: null,
  activeAuthenticator: null,
  users: [],
  error: null,
  message: '',
  appName: null,
  chains: null,
  authenticators: null,
  authenticator: null,
}

const useLightUAL = ({ appName, chains, authenticators }: ualTypes.UALType) => {
  const [ualState, setUalState] = useState<ualTypes.UALStateType>({
    ...DEFAULT_STATUS,
    appName,
    chains,
    authenticators,
  })
  const [loading, setLoading] = useState(false)

  const login = (type: string) => {
    const ual = new UAL(chains, appName, authenticators)
    const { availableAuthenticators } = ual.getAuthenticators()

    const authenticator = getAuthenticatorInstance(type, availableAuthenticators)

    setLoading(true)
    authenticateWithoutAccountInput({
      ual,
      appName,
      availableAuthenticators,
      authenticator,
    })
  }

  const restart = () => {
    const { availableAuthenticators } = ualState

    ;(availableAuthenticators || []).forEach((auth) => auth.reset())

    setUalState({ ...DEFAULT_STATUS, availableAuthenticators })
  }

  const fullLogout = (authenticator: ualTypes.Authenticator) => {
    clearCache()
    authenticator.logout().catch((e: any) => console.warn(e))
  }

  const logout = () => {
    if (ualState.authenticator) {
      fullLogout(ualState.authenticator)
    }

    setUalState(DEFAULT_STATUS)
  }

  const setUALInvalidateAt = (authenticator: ualTypes.Authenticator) => {
    const invalidateSeconds = authenticator.shouldInvalidateAfter()
    const invalidateAt = new Date()

    invalidateAt.setSeconds(invalidateAt.getSeconds() + invalidateSeconds)
    window.localStorage.setItem('UALInvalidateAt', `${invalidateAt}`)
  }

  const clearCache = useCallback(() => {
    window.localStorage.removeItem('UALLoggedInAuthType')
    window.localStorage.removeItem('UALAccountName')
    window.localStorage.removeItem('UALInvalidateAt')
  }, [])

  const checkForInvalidatedSession = useCallback(
    (type: string, invalidate: string) => {
      if (type && invalidate && new Date(invalidate) <= new Date()) {
        clearCache()

        return undefined
      }

      return type
    },
    [clearCache],
  )

  const getAuthenticatorInstance = useCallback(
    (type: string, availableAuthenticators: any) => {
      const loggedIn = availableAuthenticators.filter((auth: ualTypes.Authenticator) => {
        const name = auth.getName()

        return name === type
      })

      if (!loggedIn.length) {
        clearCache()
      }

      return loggedIn.length ? loggedIn[0] : false
    },
    [clearCache],
  )

  const submitAccountForLogin = useCallback(
    async (accountInput: string, authenticator: ualTypes.Authenticator) => {
      const message = authenticator.requiresGetKeyConfirmation()

      try {
        const users = await authenticator.login(accountInput)

        window.localStorage.setItem('UALLoggedInAuthType', authenticator.getName())
        window.localStorage.setItem('UALAccountName', accountInput)

        setUalState({
          ...ualState,
          activeUser: users[users.length - 1],
          activeAuthenticator: authenticator,
          users,
          message,
        })

        setUALInvalidateAt(authenticator)
      } catch (err) {
        console.log('submitAccountForLogin', { err })
      }
    },
    [ualState],
  )

  const authenticateWithoutAccountInput = useCallback(
    async ({
      ual,
      appName,
      availableAuthenticators,
      authenticator,
      isAutoLogin = false,
    }: ualTypes.authWithoutLoginType) => {
      try {
        const users = await authenticator?.login()
        const accountName = await users[0].getAccountName()

        if (!isAutoLogin) {
          window.localStorage.setItem('UALLoggedInAuthType', authenticator?.getName() || '')
          setUALInvalidateAt(authenticator)
        }

        setUalState({
          ...ual,
          accountName,
          appName,
          availableAuthenticators,
          authenticator,
          activeUser: users[users.length - 1],
          users,
          isAutoLogin,
        })
        setLoading(false)
      } catch (err) {
        console.log({ err })
        setLoading(false)
      }
    },
    [],
  )

  useEffect(() => {
    if (loading || ualState.activeUser) return

    let type: string | undefined = window.localStorage.getItem('UALLoggedInAuthType') || ''
    const invalidate = window.localStorage.getItem('UALInvalidateAt') || ''
    const accountName = window.localStorage.getItem('UALAccountName')

    type = checkForInvalidatedSession(type, invalidate)

    const ual = new UAL(chains, appName, authenticators)
    const { availableAuthenticators } = ual.getAuthenticators()

    try {
      if (type) {
        const authenticator = getAuthenticatorInstance(type, availableAuthenticators)

        if (!authenticator) {
          throw new Error('authenticator instance not found')
        }

        const availableCheck = setInterval(() => {
          if (!authenticator.isLoading()) {
            clearInterval(availableCheck)
            if (accountName) {
              submitAccountForLogin(accountName, authenticator)
            } else {
              setLoading(true)
              authenticateWithoutAccountInput({
                ual,
                appName,
                availableAuthenticators,
                authenticator,
              })
            }
          }
        }, 250)
      }
    } catch (e: any) {
      clearCache()
      const msg = 'sessionEndedNeedLogin'
      const source = type || 'Universal Authenticator Library'
      const errType = UALErrorType.Login

      console.warn(new UALError(msg, errType, e, source))
    }
  }, [
    ualState,
    loading,
    chains,
    appName,
    authenticators,
    checkForInvalidatedSession,
    clearCache,
    getAuthenticatorInstance,
    authenticateWithoutAccountInput,
    submitAccountForLogin,
  ])

  return { ...ualState, login, logout, restart }
}

export default useLightUAL
