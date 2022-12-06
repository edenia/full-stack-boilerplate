import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Menu, MenuItem } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

import useStyles from './styles'

const LanguageButton: React.FC = () => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const [languageAnchorEl, setLanguageAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [currentLanguaje, setCurrentLanguaje] = useState('')
  const languages = [
    {
      value: 'en',
      label: 'EN',
    },
    {
      value: 'es',
      label: 'ES',
    },
  ]

  const handleLanguajeMenuOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLanguageAnchorEl(e.currentTarget)
  }

  const handleLanguajeMenuClose = (language: string) => {
    setLanguageAnchorEl(null)
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    setCurrentLanguaje(i18n.language?.substring(0, 2) || 'en')
  }, [i18n.language])

  return (
    <>
      <Button
        className={classes.colorBtn}
        color='primary'
        startIcon={<LanguageIcon />}
        onClick={handleLanguajeMenuOpen}
      >
        <span className={classes.btnLabel}>{(currentLanguaje || '').toUpperCase()}</span>
      </Button>
      <Menu
        keepMounted
        anchorEl={languageAnchorEl}
        open={!!languageAnchorEl}
        onClose={handleLanguajeMenuClose}
      >
        {languages.map((language) => (
          <MenuItem
            key={`language-menu-${language.value}`}
            onClick={() => handleLanguajeMenuClose(language.value)}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LanguageButton
