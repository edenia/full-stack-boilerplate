import { makeStyles } from '@mui/styles'

const Styles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none !important',
    width: '100%',
    color: 'transparent !important',
    height: 66
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 51
  },
  topBarStyle: {
    backgroundColor: theme.palette.secondary.main
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
  bottomBarStyle: {
    minHeight: 52,
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    padding: theme.spacing(0, 5),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  bottomBarMenu: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    '& .text': {
      fontSize: 16,
      fontWeight: 700
    },
    '& .linkActive': {
      color: theme.palette.common.black,
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      '& .triangle': {
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderTop: `8px solid ${theme.palette.secondary.main}`
      },
      '& .border': {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        borderBottom: `3px solid ${theme.palette.common.black}`
      }
    },
    '& a': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  containerSubMenuItems: {
    width: '100%'
  },
  bottomBarButtons: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerPaper: {
    width: '100%',
    minHeight: '66px !important',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 5)
    }
  },
  leftBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondRoutesDivider: {
    borderRight: '2px solid rgba(112, 112, 112, 0.2)',
    height: '24px',
    margin: theme.spacing(2)
  },
  triangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: '108px',
    right: theme.spacing(4),
    borderRight: '12px solid transparent',
    borderLeft: '12px solid transparent',
    transform: 'translateX(-50%)',
    borderBottom: `14px solid ${theme.palette.common.white}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

export default Styles
