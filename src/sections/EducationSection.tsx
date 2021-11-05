import React from 'react'

const education = [
  {
    date: '2006 – 2010',
    place: 'Warszawa',
    company: 'Wyższa Szkoła Technologii Informatycznych w Warszawie',
    func: 'Inżynier'
  }
]

export const EducationSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>EDUCATION</h3>
      <div className="col section-content">
        <div className="row education">
          <div className="col-4 education-info">
            <div className={'date'}>{education[0]?.date}</div>
            <div className={'place'}>{education[0]?.place}</div>
          </div>
          <div className="col education-info">
            <div className={'company'}>{education[0]?.company}</div>
            <div className={'func'}>{education[0]?.func}</div>
          </div>
        </div>
      </div>
    </>
  )
}
