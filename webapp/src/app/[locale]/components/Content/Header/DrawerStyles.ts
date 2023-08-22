import { makeStyles } from '@mui/styles'

const Styles = makeStyles(theme => ({
  drawerPaper: {
    width: '100%',
    minHeight: 66,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 5)
    }
  },
  drawerContainer: {
    position: 'absolute',
    right: theme.spacing(1),
    display: 'flex',
    width: '100%',
    height: 60,
    justifyContent: 'space-between'
  },
  drawer: {
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.primary.main
    }
  },
  drawerContent: {
    width: '65vw'
  },
  logoDrawer: {
    margin: theme.spacing(4),
    width: '70%',
    paddingLeft: theme.spacing(1),
    '& img': {
      width: '162px !important',
      height: '37px !important'
    }
  },
  linkGroupBox: {
    margin: theme.spacing(2, 0)
  },
  linkGroupLabel: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    marginLeft: theme.spacing(3),
    color: theme.palette.common.white
  }
}))

export default Styles
