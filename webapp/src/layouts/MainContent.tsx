import React, { Suspense, lazy } from 'react'

import useStyles from './styles'

const Header = lazy(() => import('../components/Header'))
const Footer = lazy(() => import('../components/Footer'))
const Message = lazy(() => import('../components/Message'))

const MainContent: React.FC<{
  children: React.ReactNode
  onDrawerToggle: () => void
}> = ({ children, onDrawerToggle }) => {
  const classes = useStyles()

  return (
    <div className={classes.mainContent}>
      <Suspense fallback={<span>loading ...</span>}>
        <Header onDrawerToggle={onDrawerToggle} />
      </Suspense>
      <div className={classes.childContent}>
        {children}
        <Suspense fallback={<span>loading ...</span>}>
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={<span>loading ...</span>}>
        <Message />
      </Suspense>
    </div>
  )
}

export default MainContent
