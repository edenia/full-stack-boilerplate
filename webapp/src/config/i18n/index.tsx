import enLocale from 'date-fns/locale/en-US'
import esLocale from 'date-fns/locale/es'

export type Locale = 'en' | 'es'

type DateFnsLocaleMap = {
  [key in Locale]: globalThis.Locale | string
}

const dateFnsLocaleMap: DateFnsLocaleMap = {
  en: enLocale,
  es: esLocale
}

const defaultLocale = 'en'

export default {
  dateFnsLocaleMap,
  defaultLocale
}
