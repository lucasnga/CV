import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationsEn } from './translations.en'
import { translationsPl } from './translations.pl'

i18n.use(initReactI18next).init({
  fallbackLng: 'pl',
  debug: false,
  resources: {
    en: translationsEn,
    pl: translationsPl
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n
