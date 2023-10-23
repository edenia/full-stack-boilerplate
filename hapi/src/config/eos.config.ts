import { NameType, PrivateKeyType } from '@wharfkit/session'
import { Chains, ChainIndices, ChainDefinition } from '@wharfkit/common'

if (
  !process.env.HAPI_NETWORK_CHAIN_INDEX &&
  !process.env.HAPI_CUSTOM_NETWORK_CHAIN
) {
  throw new Error('Chain not defined')
}

export const chain = process.env.HAPI_NETWORK_CHAIN_INDEX
  ? Chains[process.env.HAPI_NETWORK_CHAIN_INDEX.trim() as ChainIndices]
  : ChainDefinition.from(
      JSON.parse(process.env.HAPI_CUSTOM_NETWORK_CHAIN || '{}')
    )

if (!chain) {
  throw new Error('Failed to load chain')
}

export const baseAccount: NameType =
  process.env.HAPI_NETWORK_BASE_ACCOUNT || 'accountname1'
export const baseAccountPassword: PrivateKeyType =
  process.env.HAPI_NETWORK_BASE_PASSWORD || 'password'
export const walletUrl = process.env.HAPI_NETWORK_WALLET_URL
