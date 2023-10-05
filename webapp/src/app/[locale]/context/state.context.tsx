'use client'

import React, {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useEffect
} from 'react'

import {
  Context,
  State,
  Action,
  SharedStateCallbacks,
  Message
} from './context-types'
import { WalletInstance } from './wharft.context'

const SharedStateContext = createContext<Context | null>({} as Context)
const initialValue: State = {
  useDarkMode: false,
  message: undefined,
  isLogout: false,
  user: null
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

      WalletInstance.getInstance().logoutWallet()

      return { ...state, user: null }

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
        const session = await WalletInstance.getInstance().loginWallet(true)

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
      const session = await WalletInstance.getInstance().loginWallet(false)

      if (!session) return

      dispatch({
        type: 'login',
        payload: { session }
      })
    } catch (error) {
      console.error('error', error)
    }
  }

  const logout = async () => {
    try {
      dispatch({ type: 'logout' })
    } catch (error) {
      console.error('error', error)
    }
  }

  return [state, { setSwitchMode, showMessage, hideMessage, login, logout }]
}
