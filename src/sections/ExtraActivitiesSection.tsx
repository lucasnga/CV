import React from 'react'
import { ExtraActivity } from '../components/ExtraActitity/ExtraActivity'

const extraActivities = [
  {
    date: 'September 2003 – June 2009',
    func: 'Social Instructor',
    company: 'Youth Palace',
    place: 'Warsaw'
  }
]

export const ExtraActivitiesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>EXTRA-CURRICULAR ACTIVITIES</h3>
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
