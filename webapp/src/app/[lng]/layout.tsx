/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-page-custom-font */
'use client'

import { useState, useCallback, useEffect } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { usePathname } from 'next/navigation'
import { DefaultSeo } from 'next-seo'
import { dir } from 'i18next'

import { seoConfig, themeConfig, i18nConfig } from '../../config'
import MainContent from './components/Content'
import { languages } from 'app/i18n/settings'
import useTranslation from 'app/i18n'
import { ApolloWrapper } from 'app/lib/apollo-wrapper'
import { SharedStateProvider } from 'app/context'

type LayoutProps = {
  children: React.ReactNode
  params: {
    lng: string
  }
}

interface Languages {
  en: string
  es: string
}

export async function generateStaticParams(): Promise<any> {
  return languages.map(lng => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng = 'en' }
}: LayoutProps): JSX.Element {
  const pathname = usePathname()
  const [metadata, setMetadata] = useState({
    title: 'website boilerplate',
    description: 'website boilerplate page',
    currentRoute: ''
  })
  const { t } = useTranslation(lng, 'seo')
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const toggleThemeType = useCallback((): void => {
    setIsDarkTheme(isDark => !isDark)
  }, [])

  useEffect(() => {
    if (typeof t === 'function' && metadata.currentRoute !== pathname) {
      setMetadata({
        title: t(`${pathname}-metaTitle`),
        description: t(`${pathname}-metaDescription`),
        currentRoute: pathname
      })
    }
  }, [t, pathname, metadata])

  return (
    <html lang={lng} dir={dir(lng)}>
      <DefaultSeo {...seoConfig} />
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='theme-color'
          content={
            isDarkTheme
              ? themeConfig.darkTheme.palette.primary.main
              : themeConfig.lightTheme.palette.primary.main
          }
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <body>
        <ApolloWrapper>
          <SharedStateProvider>
            <ThemeProvider
              theme={
                isDarkTheme ? themeConfig.darkTheme : themeConfig.lightTheme
              }
            >
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={
                  i18nConfig?.dateFnsLocaleMap?.[lng as keyof Languages]
                }
              >
                <CssBaseline />
                <MainContent
                  isDarkTheme={isDarkTheme}
                  toggleThemeType={toggleThemeType}
                  lng={lng}
                >
                  {children}
                </MainContent>
              </LocalizationProvider>
            </ThemeProvider>
          </SharedStateProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
