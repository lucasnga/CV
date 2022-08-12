import React from 'react'
import { ExtraActivity } from '../components/ExtraActitity/ExtraActivity'

const extraActivities = [
  {
    date: 'Wrzesień 2003 – Czerwiec 2009',
    func: 'Instruktor Społeczny - Linux, Web Development',
    company: 'Pałac Kultury i Nauki (Pałac Młodzieży)',
    place: 'Warszawa'
  }
]

export const ExtraActivitiesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>DZIAŁALNOŚĆ DODATKOWA</h3>
      <div className="col section-content">
        {extraActivities.map(({ date, place, func, company }) => (
          <ExtraActivity
            key={company}
            date={date}
            place={place}
            func={func}
            company={company}
          />
        ))}
      </div>
    </>
  )
}
