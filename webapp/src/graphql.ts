import { split, HttpLink, ApolloLink, ApolloClient, InMemoryCache, from } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

import { graphqlConfig } from './config'
import { refreshToken } from './utils'

const httpLink = new HttpLink({
  uri: graphqlConfig.url,
})

const wsLink = new WebSocketLink({
  uri: graphqlConfig?.url?.replace(/^http?/, 'ws').replace(/^https?/, 'wss'),
  options: {
    lazy: true,
    reconnect: true,
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...(localStorage.getItem('token')
        ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
        : null),
    },
  }))

  return forward(operation)
})

export const client = new ApolloClient({
  link: from([authMiddleware.concat(refreshToken), splitLink]),
  cache: new InMemoryCache({ addTypename: false }),
})
