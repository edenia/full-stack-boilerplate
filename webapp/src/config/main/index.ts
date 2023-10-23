import { Chains, ChainIndices, ChainDefinition } from '@wharfkit/session'

const appVersion = process.env.NEXT_PUBLIC_TAG || 'v0.0.1'
const name = process.env.NEXT_PUBLIC_NAME || 'Boilerplate App'
const title = process.env.NEXT_PUBLIC_TITLE

if (
  !process.env.NEXT_PUBLIC_NETWORK_CHAIN_INDEX &&
  !process.env.NEXT_PUBLIC_CUSTOM_NETWORK_CHAIN
) {
  throw new Error('Chain not defined')
}

export const chain = process.env.NEXT_PUBLIC_NETWORK_CHAIN_INDEX
  ? Chains[process.env.NEXT_PUBLIC_NETWORK_CHAIN_INDEX.trim() as ChainIndices]
  : ChainDefinition.from(
      JSON.parse(process.env.NEXT_PUBLIC_CUSTOM_NETWORK_CHAIN || '{}')
    )

if (!chain) {
  throw new Error('Failed to load chain')
}

export default {
  appVersion,
  name,
  title,
  chain
}
