import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  alert: {
    '& a': {
      color: theme.palette.info.contrastText,
      lineBreak: 'anywhere',
    },
  },
}))

export default Styles
