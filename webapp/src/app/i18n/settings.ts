/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']
export const defaultNS = 'common'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
