import React from 'react'

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
  return (
    <div className="row activity">
      <div className="col-4 activity-info">
        <div className={'date'}>{date}</div>
        <div className={'place'}>{place}</div>
      </div>
      <div className="col-6 activity-info">
        <div className={'function'}>{func}</div>
        <div className={'company'}>{company}</div>
      </div>
    </div>
  )
}
