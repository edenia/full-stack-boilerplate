import { makeStyles } from '@mui/styles'

const Styles = makeStyles(theme => ({
  containerIcon: {
    display: 'flex',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px'
    }
  },
  button: {
    '& .MuiButton-root': {
      minWidth: '30px'
    }
  }
}))

export default Styles
