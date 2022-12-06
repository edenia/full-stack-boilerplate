/* eslint-disable @typescript-eslint/no-empty-interface */
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
