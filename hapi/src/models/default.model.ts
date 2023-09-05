export const Operation = {
  query: 'query',
  mutation: 'mutation',
  subscription: 'subscription'
} as const

export type OperationType = (typeof Operation)[keyof typeof Operation]
