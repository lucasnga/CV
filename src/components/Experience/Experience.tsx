import React from 'react'

export function Experience({
  date,
  place,
  func,
  company,
  details
}: {
  date?: string
  place?: string
  func?: string
  company?: string
  details?: Array<string>
}): JSX.Element {
  return date === undefined ? (
    <div style={{ pageBreakAfter: 'always' }} />
  ) : (
    <div className="row experience pb-3">
      <div className="col-6 experience-info">
        <div className={'date'}>{date}</div>
        <div className={'place'}>{place}</div>
      </div>
      <div className="col-6 experience-info">
        <div className={'function'} style={{ whiteSpace: 'nowrap' }}>
          {func}
        </div>
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
