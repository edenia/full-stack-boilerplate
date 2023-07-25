'use client'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'

import { useSharedState } from 'app/context'
import useTranslation from 'app/i18n'

const query = gql`
  query Now {
    no_queries_available
  }
`

type testQuery = {
  no_queries_available: string
}

const Home: React.FC<{ params: { lng: string } }> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, 'home')
  const { data } = useSuspenseQuery<testQuery>(query)
  const [state] = useSharedState()

  if (!t) return <h1>Loading..</h1>

  return (
    <div data-testid='test-home'>
      <h1>Home Page</h1>
      <h4>Test query</h4>
      <span>{data?.no_queries_available || ''}</span>
      <h4>Test State</h4>
      <span>{state?.useDarkMode ? 'Dark Mode On' : 'Dark Mode On'}</span>
    </div>
  )
}

export default Home
