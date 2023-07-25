/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes
} from '@mui/material/styles'
import { Theme } from '@mui/material'
import '@mui/styles'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    backgroundColor: {
      transparentGreen: string
      transparentLightGreen: string
      transparentBlue: string
      transparentLightBlue: string
      transparentDarkBlue: string
    }
  }

  interface PaletteOptions {
    backgroundColor?: {
      transparentGreen: string
      transparentLightGreen: string
      transparentBlue: string
      transparentLightBlue: string
      transparentDarkBlue: string
    }
  }
}

const palette: ThemeOptions['palette'] = {
  primary: {
    main: '#00aa74',
    dark: '#079a6b',
    light: '#19b281'
  },
  secondary: {
    main: '#000',
    dark: '#085995',
    light: '#007ebf',
    contrastText: '#ffffff'
  },
  grey: {
    100: '#f4f4f4',
    200: '#F2F2F2',
    300: '#ebebeb',
    400: '#bababa',
    600: '#707070',
    700: '#535353',
    800: '#4c4d4e'
  },
  text: {
    secondary: '#000000',
    primary: '#707070'
  },
  backgroundColor: {
    transparentGreen: '#def4ed',
    transparentLightGreen: '#19b282',
    transparentBlue: '#ddecf7',
    transparentLightBlue: '#197cc5',
    transparentDarkBlue: '#085995'
  }
}

const typography: ThemeOptions['typography'] = {
  fontFamily: 'Roboto',
  h1: {
    fontSize: 64,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1
  },
  h5: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  h6: {
    fontSize: 110,
    fontWeight: 'bold'
  },
  subtitle1: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  body1: {
    fontSize: 16,
    fontWeight: 400
  },
  body2: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 16
  }
}

const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        '&.MuiButton-contained': {
          minWidth: 270,
          fontSize: 18,
          borderRadius: 18,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          textTransform: 'capitalize',
          padding: '12px 48px',
          '@media (max-width: 600px)': {
            height: 50,
            minWidth: 180,
            padding: '12px 20px'
          }
        }
      }
    }
  }
}

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    ...palette
  },
  typography,
  components
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    ...palette
  },
  typography,
  components
}

export const extraColors = {
  primaryVariantOpacity: '#7FD4B9',
  primaryFirtsExtraVariant: '#2bd8a1',
  backgroundTransparentBlueExtraVariant: '#d9eefe',
  primarySecondExtraVariant: 'rgba(0, 170, 116, 0.13)',
  secondaryVariantOpacity: 'rgb(255, 255, 255, 0.1)',
  secondaryMainVariantOpacity: 'rgb(0, 110, 191, 0.5)',
  secondaryFirstExtraVariant: 'rgba(0, 110, 191, 0.13)',
  secondaryColorTitleTextWebHosting: '#e3fe39',
  secondaryButtonWebHosting: '#004476',
  backgroundAdvancePlan: '#01998a',
  backgroundProPlan: '#0186a1',
  borderCardGrey: '#A4A4A4',
  borderContainerIconButton: '#CED4DA',
  borderField: 'rgba(0, 0, 0, 0.23)',
  backgroundGradientBottom:
    'linear-gradient(180deg, #FAFFD9 -5.83%, #E3FE39 100%)',
  accordionBorderColor: 'rgba(186, 186, 186, 1)',
  backgroundDomainField: '#ECF7FF',
  shadowButtom: '1px 4px 4px rgba(0, 0, 0, 0.15)'
}

export default {
  darkTheme: responsiveFontSizes(createTheme(darkThemeOptions)),
  lightTheme: responsiveFontSizes(createTheme(lightThemeOptions))
}
