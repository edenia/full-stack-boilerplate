import { TokenRefreshLink } from 'apollo-link-token-refresh'
import decodeJWT from 'jwt-decode'

import { graphqlConfig } from '../config'

type Claim = {
  exp: number
}

type Tokens = {
  accessToken: string
  refreshToken: string
}

type ResponseRefreshToken = {
  data: {
    refreshToken: Tokens
  }
}

export const refreshToken = new TokenRefreshLink({
  accessTokenField: 'tokens',
  isTokenValidOrUndefined: () => {
    const token = localStorage.getItem('token')

    if (!token) return true

    const claims: Claim = decodeJWT(token)
    const expirationTimeInSeconds = claims.exp * 1000
    const isValid = expirationTimeInSeconds >= Date.now()

    return isValid
  },
  fetchAccessToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken')

    // eslint-disable-next-line no-undef
    const response = await fetch(graphqlConfig.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({
        query: `query {
            refreshToken(token: "${refreshToken}") {
                accessToken
                refreshToken
              }
            }
          `,
      }),
    })

    return await response.json()
  },
  handleFetch: (tokens: Tokens) => {
    const { accessToken, refreshToken } = tokens

    localStorage.setItem('token', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  },
  handleResponse: () => (response: ResponseRefreshToken) => {
    const {
      data: {
        refreshToken: { accessToken, refreshToken },
      },
    } = response

    return { tokens: { accessToken, refreshToken } }
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to reauthenticate.')
    console.error(err)

    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
  },
})
