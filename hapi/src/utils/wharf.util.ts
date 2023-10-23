import { Session, NameType, AnyAction } from '@wharfkit/session'
import { WalletPluginPrivateKey } from '@wharfkit/wallet-plugin-privatekey'

import { eosConfig } from '../config'

const args = {
  chain: eosConfig.chain,
  actor: eosConfig.baseAccount,
  permission: 'active',
  walletPlugin: new WalletPluginPrivateKey(eosConfig.baseAccountPassword)
}

const defaultSessionOptions = {}
const session = new Session(args, defaultSessionOptions)

export const getAbi = async (account: NameType) =>
  await session.client.v1.chain.get_abi(account)

export const getAccount = async (account: NameType) =>
  await session.client.v1.chain.get_account(account)

export const sendTransaction = async (actions: AnyAction[]) => {
  try {
    return await session.transact({ actions })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message)
  }
}
