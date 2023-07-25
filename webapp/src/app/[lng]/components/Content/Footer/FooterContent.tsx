import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import clsx from 'clsx'

import Logo from '../../Logo'

import useStyles from './styles'

const FooterContent: React.FC<{ t: (tagName: string) => string }> = ({ t }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid
        container
        item
        xs={12}
        md={3}
        direction='row'
        justifyContent='space-between'
      >
        <div className={classes.logo}>
          <Logo width={'100%'} height={'55%'} />
        </div>
        <div className={classes.contactMobile}>
          <Typography
            className={clsx(classes.contact, classes.hideElementOnDesktop)}
            variant='body1'
          >
            {t('footer.callUs')}
          </Typography>
          <span className={classes.footerLabel}>+506 2256-3944</span>
        </div>
      </Grid>
    </Grid>
  )
}

export default memo(FooterContent)
