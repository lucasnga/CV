import React from 'react'
import { useTranslation } from 'react-i18next'

export function ExtraActivity({
  date,
  func,
  company,
  place
}: {
  date: string
  func: string
  company: string
  place: string
}): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className="row activity">
      <div className="col-4 activity-info">
        <div className={'date'}>{t(date)}</div>
        <div className={'place'}>{t(place)}</div>
      </div>
      <div className="col-6 activity-info">
        <div className={'function'}>{t(func)}</div>
        <div className={'company'}>{t(company)}</div>
      </div>
    </div>
  )
}
