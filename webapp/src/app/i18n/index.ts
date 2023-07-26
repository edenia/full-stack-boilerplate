/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from './settings'

const initI18next = async (lng: string, ns: any) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns))

  return i18nInstance
}

const useTranslation = (lng: string, ns = 'translation'): any => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const geti18nInstance = async () => {
      const i18nextInstance = await initI18next(lng, ns)

      setData(i18nextInstance)
    }

    geti18nInstance()
  }, [lng, ns])

  return {
    t: data?.getFixedT(lng, ns),
    i18n: data
  }
}

export default useTranslation
