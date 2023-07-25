import { Skeleton, Typography } from '@mui/material'

import useTranslation from 'app/i18n'

import useStyles from './styles'

type FooterProps = {
  isDarkTheme: boolean
  toggleThemeType(): void
  lng: string
}

const Footer: React.FC<FooterProps> = ({ lng }) => {
  const classes = useStyles()
  const { t } = useTranslation(lng, 'common')

  if (!t) return <Skeleton variant='rounded' height={690} />

  return (
    <footer>
      <Typography className={classes.copyright}>
        Copyright © {new Date().getFullYear()} {t('footer.copyright')}
      </Typography>
    </footer>
  )
}

export default Footer
