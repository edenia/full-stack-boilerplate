export const endpoint =
  process.env.HAPI_NETWORK_API || 'https://jungle.edenia.cloud'
export const chainId =
  process.env.HAPI_NETWORK_CHAIN_ID ||
  '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d'
export const baseAccount =
  process.env.HAPI_NETWORK_BASE_ACCOUNT || 'accountname1'
export const baseAccountPassword = process.env.HAPI_NETWORK_BASE_PASSWORD
export const walletUrl = process.env.HAPI_NETWORK_WALLET_URL
