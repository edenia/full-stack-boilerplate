/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import decodeJWT from 'jwt-decode'

import { graphqlConfig } from '../../../config'

function makeClient() {
  const httpLink = new HttpLink({
    uri: graphqlConfig.url
  })

  const clearLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      localStorage.clear()
    }

    window.location.href = '/'
  }

  const isTokenValid = () => {
    let token: null | string = null

    if (typeof window !== 'undefined' && window.localStorage) {
      token = window.localStorage.getItem('token')
    }

    if (!token) return true

    const claims = decodeJWT<any>(token)
    const expirationTimeInSeconds = claims.exp * 1000
    const isValid = expirationTimeInSeconds >= Date.now()

    return isValid
  }

  const fetchAccessToken = async () => {
    try {
      let refreshToken: null | string = null

      if (typeof window !== 'undefined' && window.localStorage) {
        refreshToken = window.localStorage.getItem('refreshToken')
      }

      // eslint-disable-next-line no-undef
      const response = await fetch(graphqlConfig.url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          query: `query {
            refresh_token(rt: "${refreshToken}") {
                  accessToken
                  refreshToken
                }
              }
            `
        })
      })

      return await response.json()
    } catch (error) {
      console.warn('Your refresh token is invalid. Try to reauthenticate.')
      console.error(error)

      clearLocalStorage()
    }
  }

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(async ({ headers = {} }) => {
      let token: null | string = null

      if (typeof window !== 'undefined' && window.localStorage) {
        token = window.localStorage.getItem('token')
      }

      if (!isTokenValid()) {
        const { data } = await fetchAccessToken()

        if (!data?.refresh_token) {
          clearLocalStorage()

          return null
        }

        const { accessToken, refreshToken } = data.refresh_token

        window.localStorage.setItem('token', accessToken)
        window.localStorage.setItem('refreshToken', refreshToken)
      }

      return {
        headers: {
          ...headers,
          ...(token ? { Authorization: `Bearer ${token}` } : null)
        }
      }
    })

    return forward(operation)
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            authMiddleware,
            httpLink
          ])
        : httpLink
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
