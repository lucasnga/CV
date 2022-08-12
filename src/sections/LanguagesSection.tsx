import React from 'react'
import { useTranslation } from 'react-i18next'
import { Skill } from '../components/Skill/Skill'

const languages = [
  {
    name: 'Angielski',
    value: 3
  },
  {
    name: 'Polski',
    value: 6
  }
]

export const LanguagesSection = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <h3 className={'section-head pt-3 pb-2 text-end m-0'}>{t('JĘZYKI')}</h3>
      {languages.map(({ name, value }) => {
        return <Skill key={name} name={name} value={value} range={6} />
      })}
    </>
  )
}
