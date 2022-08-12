import React from 'react'
import { useTranslation } from 'react-i18next'

const signs = {
  solid: '★',
  hollow: '☆'
}

export function Skill({
  name,
  value,
  range = 5
}: {
  name: string
  value: number
  range?: number
}): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className={'row skill pb-1 text-end'}>
      <div className={'col text-end ps-0'}>
        <span className={'skill-name'}>{t(name)}</span>
      </div>
      <div className={'col-3 text-end ps-0'}>
        <span className={'skill-score'}>
          {Array(range).fill(signs.solid).fill(signs.hollow, value).join('')}
        </span>
      </div>
    </div>
  )
}
