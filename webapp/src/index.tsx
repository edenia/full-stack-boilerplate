import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import { SharedStateProvider } from './context/state.context'
import { client } from './graphql'
import reportWebVitals from './reportWebVitals'
import './i18n'

const App = lazy(() => import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SharedStateProvider>
        <Suspense fallback={<span>loading App ...</span>}>
          <App />
        </Suspense>
      </SharedStateProvider>
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
