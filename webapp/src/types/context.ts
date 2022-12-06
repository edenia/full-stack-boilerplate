/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch } from 'react'

import { Ual, User } from './common'

export type Message = {
  autoHide: boolean
  autoHideDuration: number
  anchorOrigin: {
    vertical: 'bottom'
    horizontal: 'center'
  }
  type: 'error' | 'info' | 'success' | 'warning'
  content: string
}

export interface State {
  useDarkMode: boolean
  user: User | null
  openMenuWallets: boolean
  elemRef: null
  ual: Ual | null
  message?: Message
  isLogout: boolean
}

export type Context = {
  state: State
  dispatch: Dispatch<any>
}

export interface SharedStateCallbacks {
  setSwitchMode: (payload: boolean) => void
  showMessage: (payload: Message) => void
  hideMessage: () => void
  login: (type: string) => void
  logout: () => void
  handleOpenMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleCloseMenu: () => void
}

export interface Action {
  payload: any
  type: string
}
