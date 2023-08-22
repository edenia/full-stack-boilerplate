'use client'

import { useTransition, memo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import LanguageIcon from './LanguageIcon'

const LanguageSelector = () => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [, startTransition] = useTransition()
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (lng: string | null) => {
    if (!lng) {
      setAnchorEl(null)

      return
    }

    startTransition(() => {
      router.replace(pathname, { locale: lng })
    })
  }

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {locale} <LanguageIcon />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {['en', 'es'].map(lng => (
          <MenuItem key={lng} onClick={() => handleClose(lng)}>
            {t('locale', { locale: lng })}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default memo(LanguageSelector)
