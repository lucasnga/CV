import React from 'react'

export function Experience({
  date,
  place,
  func,
  company
}: {
  date: string
  place: string
  func: string
  company: string
}): JSX.Element {
  return (
    <div className="row experience">
      <div className="col-4 experience-info">
        <div className={'date'}>{date}</div>
        <div className={'place'}>{place}</div>
      </div>
      <div className="col experience-info">
        <div className={'function'}>{func}</div>
        <div className={'company'}>{company}</div>
      </div>
    </div>
  )
}
