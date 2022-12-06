import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow: `${theme.shadows[0]}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: theme.shadows[4],
      borderBottom: 0,
    },
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2),
    },
  },
  typography: {
    color: theme.palette.text.primary,
    flexGrow: 1,
  },
  desktopSection: {
    display: 'flex',
    height: 54,
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiButton-startIcon': {
      marginRight: '0 !important',
      marginLeft: '0 !important',
    },
    [theme.breakpoints.up('md')]: {
      '& .MuiButton-startIcon': {
        marginRight: '8px  !important',
        marginLeft: '-4px  !important',
      },
    },
  },
  mobileSection: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  colorBtn: {
    color: `${theme.palette.common.black} !important`,
  },
  btnLabel: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}))

export default Styles
