import { makeStyles } from '@mui/styles'

const Styles = makeStyles(theme => ({
  drawerContainer: {
    position: 'absolute',
    right: theme.spacing(1),
    display: 'flex',
    width: '100%',
    height: 60,
    justifyContent: 'space-between'
  },
  drawerShowDesktop: {
    display: 'contents',
    height: 88,
    [theme.breakpoints.down('md')]: { display: 'none' }
  },
  drawerShowMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: { display: 'contents' }
  },
  topBarMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 25,
    marginLeft: theme.spacing(2),
    '& .text': {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '19px',
      color: theme.palette.grey[300]
    },
    '& .linkActive': {
      fontWeight: 900,
      color: theme.palette.common.white
    },
    [theme.breakpoints.up('lg')]: {
      gap: 40,
      marginLeft: theme.spacing(9)
    }
  },
  languageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none'
    }
  },
  contactUs: {
    padding: theme.spacing(0, 2),
    '& .text': {
      color: theme.palette.grey[300]
    },
    '& .linkActive': {
      color: theme.palette.common.white,
      fontWeight: 900
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 9)
    }
  },
  logoAndMenu: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 112,
    height: 40
  }
}))

export default Styles
