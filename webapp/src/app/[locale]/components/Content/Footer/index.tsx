import { Typography } from '@mui/material'
import { useTranslations } from 'next-intl'

import useStyles from './styles'

type FooterProps = {
  isDarkTheme: boolean
  toggleThemeType(): void
}

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles()
  const t = useTranslations('Footer')

  return (
    <footer>
      <Typography className={classes.copyright}>
        Copyright © {new Date().getFullYear()} {t('copyright')}
      </Typography>
    </footer>
  )
}

export default Footer
