import React from 'react'
import { useTranslation } from 'react-i18next'

export const InfoBox = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <div className="pt-5" />
      <div className="pt-2" />
      <div className="row">
        <h3 className="section-head text-end pt-3">{t('O MNIE')}</h3>
      </div>
      <div className="infoBox section">
        <div className="row info-row">
          <span className={'info-row-head'}>{t('E-mail')}</span>
          <span className={'info-row-value'}>
            <a href="mailto:lucasnga.official@gmail.com">
              {t('lucasnga.official@gmail.com')}
            </a>
          </span>
        </div>
        <div className="row info-row">
          <span className={'info-row-head'}>{t('Telefon')}</span>
          <span className={'info-row-value'}>
            <a href="tel:(+48) 509-232-926">{t('(+48) 509-232-926')}</a>
          </span>
        </div>
        <div className="row info-row">
          <span className={'info-row-head'}>{t('Linki')}</span>
          <span className={'info-row-value'}>
            <a href="https://www.linkedin.com/in/lukasz-anuszkiewicz">
              LinkedIn
            </a>
            {', '}
            <a href="https://github.com/lucasnga">{t('GitHub')}</a>
          </span>
        </div>
        <div className="row info-row">
          <span className={'info-row-head'}>{t('Data urodzenia')}</span>
          <span className={'info-row-value'}>{t('1984-09-26')}</span>
        </div>
        <div className="row info-row">
          <span className={'info-row-head'}>{t('Miejsce zamieszkania')}</span>
          <div className={'info-row-value'}>{t('Warszawa, Polska')}</div>
        </div>
      </div>
    </>
  )
}
