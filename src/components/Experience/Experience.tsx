import React from 'react'

export function Experience({
  date,
  place,
  func,
  company,
  details
}: {
  date: string
  place: string
  func: string
  company: string
  details?: Array<string>
}): JSX.Element {
  return (
    <div className="row experience">
      <div className="col-6 experience-info">
        <div className={'date'}>{date}</div>
        <div className={'place'}>{place}</div>
      </div>
      <div className="col-6 experience-info">
        <div className={'function'}>{func}</div>
        <div className={'company'}>{company}</div>
      </div>
      <div className="col-12">
        <ul>
          {details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
