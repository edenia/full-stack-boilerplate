import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  sidebarHeader: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginBottom: theme.spacing(1),
    height: 67,
  },
  scrollbar: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    margin: '0 4px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    height: 45,
    padding: theme.spacing(1, 2, 1, 3),
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  icons: {
    display: 'flex',
    minWidth: 56,
    '& svg': {
      color: '#121212',
    },
  },
  navLabel: {
    textTransform: 'capitalize',
    textDecoration: 'none',
    fontWeight: '400',
    letterSpacing: '0.44px',
    fontSize: theme.typography.subtitle2.fontSize,
    color: '#121212',
  },
  logo: {
    marginBottom: 2,
  },
  account: {
    fontWeight: 'bold',
    fontSize: 14,
  },
}))

export default Styles
