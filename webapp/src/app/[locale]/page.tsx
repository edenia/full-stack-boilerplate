'use client'

import { useEffect } from 'react'
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { useTranslations } from 'next-intl'
import { gql } from '@apollo/client'

import { useSharedState } from './context'

const query = gql`
  query Now {
    no_queries_available
  }
`

type testQuery = {
  no_queries_available: string
}

const Home: React.FC = () => {
  const t = useTranslations('IndexPage')
  const { data } = useQuery<testQuery>(query)
  const [state, { login }] = useSharedState()

  useEffect(() => {
    login()
  }, [])

  return (
    <div style={{ marginTop: 150 }} data-testid='test-home'>
      <h1>{t('title')}</h1>
      <h4>Test query</h4>
      <span>{data?.no_queries_available || ''}</span>
      <h4>Test State</h4>
      <span>{state?.useDarkMode ? 'Dark Mode On' : 'Dark Mode On'}</span>
    </div>
  )
}

export default Home
