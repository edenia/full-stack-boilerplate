import * as eosjsJsonRpc from 'eosjs/dist/eosjs-jsonrpc'
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig'
import * as EosApi from 'eosjs/dist/eosjs-api'
import { Action } from 'eosjs/dist/eosjs-serialize'

import { eosConfig } from '../config'

export const rpc = new eosjsJsonRpc.JsonRpc(eosConfig.endpoint, {
  fetch: require('node-fetch')
})
const eosApi = new EosApi.Api({
  rpc,
  signatureProvider: new JsSignatureProvider([eosConfig.baseAccount]),
  chainId: eosConfig.chainId
})

const getAbi = (account: string) => eosApi.getAbi(account)

const transact = async (actions: Action[]) => {
  try {
    const transaction = await eosApi.transact(
      {
        actions
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    )

    return transaction
  } catch (error: any) {
    throw new Error(
      error.message.replace(/assertion failure with message: /gi, '')
    )
  }
}

const serializeActions = async (actions: Action[]) => {
  return await eosApi.serializeActions(actions)
}

const serializeTransaction = async (tx: any) => {
  return eosApi.serializeTransaction(tx)
}

const signTx = async (unsignedTx: Uint8Array) => {
  return await eosApi.signatureProvider.sign({
    chainId: eosConfig.chainId,
    requiredKeys: [], // TODO: load from .env
    serializedTransaction: unsignedTx,
    abis: []
  })
}

const pushSignedTx = async (signedTx: any) => {
  return await eosApi.pushSignedTransaction(signedTx)
}

export default {
  rpc,
  getAbi,
  transact,
  serializeActions,
  serializeTransaction,
  signTx,
  pushSignedTx
}
