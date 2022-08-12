import React from 'react'
import { useTranslation } from 'react-i18next'

export function Course({
  date,
  func,
  company
}: {
  date: string
  func: string
  company: string
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="row course">
      <div className="col-4 course-info">
        <div className={'date'}>{t(date)}</div>
      </div>
      <div className="col course-info">
        <div className={'function'}>{t(func)}</div>
        <div className={'company'}>{t(company)}</div>
      </div>
    </div>
  )
}
