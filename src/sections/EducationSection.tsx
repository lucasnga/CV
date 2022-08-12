import React from 'react'
import { useTranslation } from 'react-i18next'

const education = [
  {
    date: '2006 – 2010',
    place: 'Warszawa',
    company: 'Wyższa Szkoła Technologii Informatycznych',
    func: 'Inżynier (sieci komputerowe)'
  },
  {
    date: '2003 – 2005',
    place: 'Warszawa',
    company:
      'Zespół Szkół Elektronicznych i Licealnych - Technikum Elektroniczne nr 3',
    func: 'Technik Elektronik'
  }
]

export const EducationSection = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <h3 className={'section-head'}>{t('EDUKACJA')}</h3>
      <div className="col section-content">
        {education.map((school) => {
          return (
            <div className="row education" key={t(school.date)}>
              <div className="col-4 education-info">
                <div className={'date'}>{t(school?.date)}</div>
                <div className={'place'}>{t(school?.place)}</div>
              </div>
              <div className="col education-info">
                <div className={'company'}>{t(school?.company)}</div>
                <div className={'func'}>{t(school?.func)}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
