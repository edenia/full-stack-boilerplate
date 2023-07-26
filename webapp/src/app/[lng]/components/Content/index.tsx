/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'

import useStyles from './styles'

const DynamicHeader = dynamic(() => import('./Header'))
const DynamicFooter = dynamic(() => import('./Footer'))
const DynamicContainer = dynamic(() => import('./Container'))

type LayoutProps = {
  children: any
  isDarkTheme: boolean
  lng: string
  toggleThemeType(): void
}

const MainContent: React.FC<LayoutProps> = ({
  children,
  isDarkTheme,
  lng,
  toggleThemeType
}) => {
  const classes = useStyles()
  const wrapper = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const closeLoginModal = () => {
    if (!open) return

    setOpen(false)
    setAnchorEl(null)
  }

  return (
    <div ref={wrapper} className={classes.wrapperClass}>
      <DynamicHeader
        open={open}
        setOpen={setOpen}
        anchorEl={anchorEl}
        onclick={closeLoginModal}
        setAnchorEl={setAnchorEl}
        lng={lng}
      />
      <DynamicContainer onclick={closeLoginModal}>{children}</DynamicContainer>
      <DynamicFooter
        isDarkTheme={isDarkTheme}
        toggleThemeType={toggleThemeType}
        lng={lng}
      />
    </div>
  )
}

export default MainContent
