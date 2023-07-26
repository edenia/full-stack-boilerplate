'use client'

import React, { createContext, useReducer, useMemo, useContext } from 'react'

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
  isLogout: false
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

    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')

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
  const value = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  )

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

  return [state, { setSwitchMode, showMessage, hideMessage }]
}
