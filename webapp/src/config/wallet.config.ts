import { Anchor } from 'ual-anchor'

import { commonTypes } from 'types'

export const rpcEndpoint = `${process.env.REACT_APP_UAL_API_PROTOCOL}://${
  process.env.REACT_APP_UAL_API_HOST
}${process.env.REACT_APP_UAL_API_PORT ? ':' : ''}${process.env.REACT_APP_UAL_API_PORT}`
export const appName = process.env.REACT_APP_UAL_APP_NAME || 'app'
export const network: commonTypes.NetworkChains = {
  chainId: process.env.REACT_APP_UAL_CHAIN_ID || '',
  rpcEndpoints: [
    {
      protocol: process.env.REACT_APP_UAL_API_PROTOCOL || '',
      host: process.env.REACT_APP_UAL_API_HOST || '',
      port: parseInt(process.env.REACT_APP_UAL_API_PORT || ''),
    },
  ],
}
export const authenticators = [new Anchor([network], { appName, verifyProofs: true })]
