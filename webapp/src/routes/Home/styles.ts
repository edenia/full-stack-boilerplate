import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  rootHome: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
  },
  titleHome: {
    width: 'auto',
    border: '1px solid red',
    height: 100,
    [theme.breakpoints.up('sm')]: {
      width: 750,
      height: 50,
    },
  },
}))

export default Styles
