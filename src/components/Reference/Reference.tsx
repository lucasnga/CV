import React from 'react'
import { useTranslation } from 'react-i18next'

export function Reference({
  name,
  company,
  email,
  phone
}: {
  name: string
  company: string
  email: string
  phone: string
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="row reference">
      <div className="info">
        <div className={'name'}>{t(name)}</div>
        <div className={'company'}>{t(company)}</div>
      </div>
      <div className="contact">
        <div className={'email'}>{t(email)}</div>
        <div className={'phone'}>{t(phone)}</div>
      </div>
    </div>
  )
}
