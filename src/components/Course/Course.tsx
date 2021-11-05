import React from 'react'

export function Course({
  date,
  func,
  company
}: {
  date: string
  func: string
  company: string
}): JSX.Element {
  return (
    <div className="row course">
      <div className="col-4 course-info">
        <div className={'date'}>{date}</div>
      </div>
      <div className="col course-info">
        <div className={'function'}>{func}</div>
        <div className={'company'}>{company}</div>
      </div>
    </div>
  )
}
