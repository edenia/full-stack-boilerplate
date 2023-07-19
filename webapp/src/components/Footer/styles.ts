import { makeStyles } from '@mui/styles'

const Styles = makeStyles((theme) => ({
  footerRoot: {
    padding: theme.spacing(2),
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    display: 'flex',
  },
  listItem: {
    display: 'inline-block',
    width: '100px !important',
    '&:hover, &:active:': {
      color: theme.palette.action.selected,
    },
  },
}))

export default Styles
