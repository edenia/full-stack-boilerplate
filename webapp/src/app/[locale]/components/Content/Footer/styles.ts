import { makeStyles } from '@mui/styles'

const Styles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2, 3),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 8)
    }
  },
  contentWrapper: {
    border: '1px solid red'
  },
  contactMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  logo: {
    width: '45%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '232px'
    }
  },
  paymentMethod: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      alignItems: 'end'
    }
  },
  paymentLogo: {
    width: '48px',
    height: '48px',
    marginLeft: theme.spacing(1)
  },
  footerLabel: {
    fontSize: theme.spacing(2),
    textAlign: 'start',
    paddingBottom: theme.spacing(1),
    fontWeight: 'bold'
  },
  aStyle: {
    textDecoration: 'none !important',
    color: `${theme.palette.common.white} !important`,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      height: 32
    }
  },
  legend: {
    paddingTop: theme.spacing(1)
  },
  contact: {
    paddingBottom: theme.spacing(1)
  },
  direction: {
    width: '100vw',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  hideElementOnDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  hideElementOnMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  copyright: {
    backgroundColor: '#000',
    color: theme.palette.common.white,
    fontSize: '14px',
    fontWeight: 400,
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  footerPayment: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'end'
    }
  }
}))

export default Styles
