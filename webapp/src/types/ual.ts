/* eslint-disable @typescript-eslint/no-explicit-any */
import { NetworkChains, User } from './common'

export type UALType = {
  appName: string
  chains: Array<NetworkChains>
  authenticators: Array<any>
}

export type UALStateType = {
  activeUser: any
  activeAuthenticator: any
  users: Array<User>
  error: any | string
  message: string | boolean
  appName: string | null
  chains: NetworkChains | Array<NetworkChains> | null
  authenticators: Array<Authenticator> | null
  authenticator: Authenticator | null
  availableAuthenticators?: Array<Authenticator>
}

export type authWithoutLoginType = {
  ual: any
  appName: string
  availableAuthenticators?: Array<Authenticator>
  authenticator: Authenticator
  isAutoLogin?: boolean
}

export interface ButtonStyle {
  icon: string
  text: string
  textColor: string
  background: string
}

export interface Authenticator {
  init(): Promise<void>
  reset(): void
  isErrored(): boolean
  getOnboardingLink(): string
  isLoading(): boolean
  getStyle(): ButtonStyle
  shouldRender(): boolean
  shouldAutoLogin(): boolean
  shouldRequestAccountName(): Promise<boolean>
  shouldInvalidateAfter(): number
  login(accountName?: string): Promise<any>
  logout(): Promise<void>
  requiresGetKeyConfirmation(): boolean
  getName(): string
}
