import { SessionKit, Chains } from '@wharfkit/session'
import { WebRenderer } from '@wharfkit/web-renderer'
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor'

class WalletInstance {
  private static instance: WalletInstance
  private sessionKit: SessionKit

  private constructor() {
    const args = {
      appName: 'myapp',
      chains: [Chains.Jungle4],
      ui: new WebRenderer(),
      walletPlugins: [new WalletPluginAnchor()]
    }
    const options = {}

    this.sessionKit = new SessionKit(args, options)
  }

  public static getInstance(): WalletInstance {
    if (!WalletInstance.instance) {
      WalletInstance.instance = new WalletInstance()
    }

    return WalletInstance.instance
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

export { WalletInstance }
