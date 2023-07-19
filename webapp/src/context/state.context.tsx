import React, {
  createContext,
  useEffect,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from 'react'

import { contextTypes, commonTypes } from 'types'
import { useLightUAL } from 'hooks'
import { walletConfig } from 'config'

const SharedStateContext = createContext<contextTypes.Context | null>({} as contextTypes.Context)
const initialValue: contextTypes.State = {
  useDarkMode: false,
  user: null,
  openMenuWallets: false,
  elemRef: null,
  ual: null,
  message: undefined,
  isLogout: false,
}

const sharedStateReducer = (
  state: contextTypes.State,
  action: contextTypes.Action,
): contextTypes.State => {
  switch (action.type) {
    case 'setSwitchMode': {
      return {
        ...state,
        useDarkMode: action.payload,
      }
    }

    case 'showMessage':
      return {
        ...state,
        message: {
          autoHide: true,
          ...action.payload,
        },
      }

    case 'hideMessage':
      return {
        ...state,
        message: undefined,
      }

    case 'logout':
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')

      return { ...state, user: null }

    case 'setUser':
      return {
        ...state,
        user: action.payload,
      }

    case 'ual':
      return {
        ...state,
        ual: action.payload,
        isLogout: false,
      }

    case 'setOpenMenuWallets': {
      return {
        ...state,
        elemRef: action.payload,
        openMenuWallets: Boolean(action.payload),
      }
    }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export const SharedStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ualState = useLightUAL({
    appName: walletConfig.appName,
    chains: [walletConfig.network],
    authenticators: walletConfig.authenticators,
  })
  const [state, dispatch] = useReducer(sharedStateReducer, {
    ...initialValue,
  })
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  )

  const loadData = useCallback(async (ualState: commonTypes.Ual) => {
    dispatch({ type: 'ual', payload: ualState })
  }, [])

  useEffect(() => {
    if (!ualState) return

    if (state.isLogout || !state?.ual || (!state?.ual.activeUser && ualState?.activeUser))
      loadData(ualState)
  }, [ualState, loadData, state])

  return <SharedStateContext.Provider value={value}>{children}</SharedStateContext.Provider>
}

export const useSharedState = (): [contextTypes.State, contextTypes.SharedStateCallbacks] => {
  const context = useContext(SharedStateContext)

  if (!context) {
    throw new Error(`useSharedState must be used within a SharedStateContext`)
  }

  const { state, dispatch } = context

  const setSwitchMode = (payload: boolean) => dispatch({ type: 'setSwitchMode', payload })

  const showMessage = (payload: contextTypes.Message) => dispatch({ type: 'showMessage', payload })

  const hideMessage = () => dispatch({ type: 'hideMessage' })

  const login = (type: string) => {
    if (!state.ual?.login) return

    state.ual?.login(type)
  }

  const logout = () => {
    if (!state.ual?.logout) return

    dispatch({ type: 'logout' })
    state.ual?.logout()
  }

  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({
      type: 'setOpenMenuWallets',
      payload: e.currentTarget,
    })
  }

  const handleCloseMenu = () => {
    dispatch({
      type: 'setOpenMenuWallets',
      payload: null,
    })
  }

  return [
    state,
    {
      setSwitchMode,
      showMessage,
      hideMessage,
      login,
      logout,
      handleOpenMenu,
      handleCloseMenu,
    },
  ]
}
