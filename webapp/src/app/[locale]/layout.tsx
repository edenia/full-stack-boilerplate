/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @next/next/no-page-custom-font */
'use client'

import { useState, useCallback, useEffect } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { createTranslator, NextIntlClientProvider } from 'next-intl'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { usePathname } from 'next/navigation'
import { notFound } from 'next/navigation'
import { DefaultSeo } from 'next-seo'

import { seoConfig, themeConfig, i18nConfig } from '../../config'
import MainContent from './components/Content'
import { ApolloWrapper } from './lib/apollo-wrapper'
import { SharedStateProvider } from './context'

type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

interface Languages {
  en: string
  es: string
}

async function getLanguages(locale: string) {
  try {
    return (await import(`../../languages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export default function RootLayout({
  children,
  params: { locale = 'en' }
}: LayoutProps) {
  const [languages, setlanguages] = useState(null)

  const pathname = usePathname()
  const [metadata, setMetadata] = useState({
    title: 'website boilerplate',
    description: 'website boilerplate page',
    currentRoute: ''
  })
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  const toggleThemeType = useCallback((): void => {
    setIsDarkTheme(isDark => !isDark)
  }, [])

  useEffect(() => {
    const getLngs = async () => {
      const lgns = await getLanguages(locale)

      setlanguages(lgns)
    }

    getLngs()
  }, [locale])

  useEffect(() => {
    const prepareMetadate = async () => {
      const t = createTranslator({ locale, messages: languages })

      setMetadata({
        title: t(`Metadata.${pathname}.Title`),
        description: t(`Metadata.${pathname}.Description`),
        currentRoute: pathname
      })
    }

    languages && prepareMetadate()
  }, [languages, locale, pathname])

  return (
    <html lang={'en'}>
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
                  i18nConfig?.dateFnsLocaleMap?.[locale as keyof Languages]
                }
              >
                {languages ? (
                  <NextIntlClientProvider locale={locale} messages={languages}>
                    <CssBaseline />
                    <MainContent
                      isDarkTheme={isDarkTheme}
                      toggleThemeType={toggleThemeType}
                    >
                      {children}
                    </MainContent>
                  </NextIntlClientProvider>
                ) : (
                  <span>loading...</span>
                )}
              </LocalizationProvider>
            </ThemeProvider>
          </SharedStateProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
