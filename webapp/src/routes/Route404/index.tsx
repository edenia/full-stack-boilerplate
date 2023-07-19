import React from 'react'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const Route404: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Typography component='h1' variant='h1' align='center' gutterBottom>
        404
      </Typography>
      <Typography component='h2' variant='h5' align='center' gutterBottom>
        Page not found.
      </Typography>
      <Typography component='h2' variant='body1' align='center' gutterBottom>
        The page you are looking for might have been removed.
      </Typography>

      <Button component={Link} to='/' variant='contained' color='primary'>
        Return to website
      </Button>
    </div>
  )
}

export default Route404
