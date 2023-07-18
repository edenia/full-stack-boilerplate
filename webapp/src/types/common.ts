export interface RpcEndpoint {
  protocol: string
  host: string
  port: number
  path?: string
}

export interface NetworkChains {
  chainId: string
  rpcEndpoints: Array<RpcEndpoint>
}

export interface User {
  accountName: string
  role: string
}

export interface Ual {
  activeAuthenticator: null
  activeUser: null
  appName: string | null
  authenticators: Array<Authenticator> | null
  chains: NetworkChains | Array<NetworkChains> | null
  error: null
  login: (type: string) => void
  logout: () => void
  message: string | boolean
  restart: () => void
  users: Array<User>
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
  login(accountName?: string): Promise<User[]>
  logout(): Promise<void>
  requiresGetKeyConfirmation(): boolean
  getName(): string
}
