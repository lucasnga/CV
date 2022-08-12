import React from 'react'
import { useTranslation } from 'react-i18next'

const hobbies = ['Jazda na rowerze', 'Żeglarstwo']

export const HobbiesSection = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <h3 className={'section-head text-end pt-3 pb-2 m-0'}>{t('HOBBY')}</h3>
      <div className="section-content section-hobbies text-end">
        <span className={'hobbies-name'}>{t(hobbies.join(', '))}</span>
      </div>
    </>
  )
}
