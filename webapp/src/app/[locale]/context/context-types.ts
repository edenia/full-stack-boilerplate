/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react'
import { Session } from '@wharfkit/session'

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

export type Context = {
  state: State
  dispatch: Dispatch<any>
}

export interface State {
  useDarkMode: boolean
  message?: Message
  isLogout: boolean
  user: Session | null
}

export interface SharedStateCallbacks {
  setSwitchMode: (payload: boolean) => void
  showMessage: (payload: Message) => void
  hideMessage: () => void
  login: () => void
}

export interface Action {
  payload: any
  type: string
}
