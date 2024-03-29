import { SessionKit } from '@wharfkit/session'
import { WebRenderer } from '@wharfkit/web-renderer'
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor'

import { mainConfig } from '../../../config'

class Wallet {
  private static instance: Wallet
  private sessionKit: SessionKit

  private constructor() {
    const args = {
      appName: mainConfig.name,
      chains: [mainConfig.chain],
      ui: new WebRenderer(),
      walletPlugins: [new WalletPluginAnchor()]
    }
    const options = {}

    this.sessionKit = new SessionKit(args, options)
  }

  public static getInstance(): Wallet {
    if (!Wallet.instance) {
      Wallet.instance = new Wallet()
    }

    return Wallet.instance
  }

  async loginWallet(restoreSession = false) {
    if (restoreSession) {
      const activeSessions = await this.sessionKit.getSessions()

      // by default return the first active session in the list
      return activeSessions.length > 0 ? await this.sessionKit.restore() : null
    }

    const login = await this.sessionKit.login()

    return login.session
  }

  async logoutWallet() {
    this.sessionKit.logout()
  }
}

export { Wallet }
