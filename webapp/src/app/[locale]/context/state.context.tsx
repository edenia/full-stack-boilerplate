'use client'

import React, {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useEffect
} from 'react'
import { SessionKit } from '@wharfkit/session'
import { WebRenderer } from '@wharfkit/web-renderer'
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor'

import {
  Context,
  State,
  Action,
  SharedStateCallbacks,
  Message
} from './context-types'

const SharedStateContext = createContext<Context | null>({} as Context)
const initialValue: State = {
  useDarkMode: false,
  message: undefined,
  isLogout: false,
  user: null
}

const args = {
  appName: 'myapp',
  chains: [
    {
      id: '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d',
      url: 'http://jungle4.greymass.com'
    }
  ],
  ui: new WebRenderer(),
  walletPlugins: [new WalletPluginAnchor()]
}

const options = {}
const sessionKit = new SessionKit(args, options)

const loginWallet = async (restoreSession = false) => {
  if (restoreSession) {
    const activeSessions = await sessionKit.getSessions()

    // be default return the first active session in the list
    return activeSessions.length > 0 ? await sessionKit.restore() : null
  }

  const login = await sessionKit.login()

  return login.session
}

const sharedStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setSwitchMode': {
      return {
        ...state,
        useDarkMode: action.payload
      }
    }

    case 'showMessage':
      return {
        ...state,
        message: {
          autoHide: true,
          ...action.payload
        }
      }

    case 'hideMessage':
      return {
        ...state,
        message: undefined
      }

    case 'login':
      return { ...state, user: action.payload.session }

    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')

      sessionKit.logout()

      return { ...state }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export const SharedStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(sharedStateReducer, {
    ...initialValue
  })
  const value = useMemo(() => ({ state, dispatch }), [state])

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const session = await loginWallet(true)

        console.log('Restored session: ', session?.actor.toString())

        dispatch({
          type: 'login',
          payload: { session }
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error)
      }
    }

    restoreSession()
  }, [])

  return (
    <SharedStateContext.Provider value={value}>
      {children}
    </SharedStateContext.Provider>
  )
}

export const useSharedState = (): [State, SharedStateCallbacks] => {
  const context = useContext(SharedStateContext)

  if (!context) {
    throw new Error(`useSharedState must be used within a SharedStateContext`)
  }

  const { state, dispatch } = context

  const setSwitchMode = (payload: boolean) =>
    dispatch({ type: 'setSwitchMode', payload })

  const showMessage = (payload: Message) =>
    dispatch({ type: 'showMessage', payload })

  const hideMessage = () => dispatch({ type: 'hideMessage' })

  const login = async () => {
    try {
      const session = await loginWallet(false)

      console.log('Logged in: ', session?.actor.toString())

      if (!session) return

      dispatch({
        type: 'login',
        payload: { session }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return [state, { setSwitchMode, showMessage, hideMessage, login }]
}
