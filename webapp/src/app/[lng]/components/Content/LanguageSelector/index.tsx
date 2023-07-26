/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { RefObject, useEffect, useRef, useState, memo } from 'react'
import { Trans } from 'react-i18next/TransWithoutContext'
import Link from 'next/link'
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography
} from '@mui/material'

import useTranslation from 'app/i18n'

import LanguageIcon from './LanguageIcon'
import useStyles from './styles'

const LanguageSelector = ({ lng }: { lng: string }): JSX.Element => {
  const { t } = useTranslation(lng, 'common')
  const classes = useStyles()
  const anchorRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current?.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      if (anchorRef.current !== null) {
        anchorRef.current.focus()
      }
    }

    prevOpen.current = open
  }, [open])

  if (!t) return <h1>Loading..</h1>

  return (
    <>
      <div className={classes.button}>
        <Trans t={t} />
        <Button
          id={`composition-button-${Math.random()}`}
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          aria-label='composition-menu-btn'
          ref={anchorRef as RefObject<HTMLButtonElement>}
        >
          <div className={classes.containerIcon}>
            <LanguageIcon
              width={width > 600 ? 30 : 24}
              height={width > 600 ? 30 : 24}
            />
          </div>
          <Typography variant='body1' className={classes.languageLabel}>
            {t(lng)}
          </Typography>
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='left'
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={event => handleListKeyDown(event)}
                >
                  <MenuItem id='language-en'>
                    <Link href={'/en'}> EN</Link>
                  </MenuItem>
                  <MenuItem id='language-es'>
                    <Link href={'/es'}> ES</Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default memo(LanguageSelector)
