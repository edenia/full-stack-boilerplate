import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    minHeight: '-webkit-fill-available',
    fallbacks: [{ minHeight: 'fill-available' }, { minHeight: '-moz-available' }],
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  childContent: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  desktopSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      display: 'flex',
      '& .MuiPaper-root': {
        width: 260,
      },
    },
  },
  mobileSection: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default Styles
