import React from 'react'

const education = [
  {
    date: '2006 – 2010',
    place: 'Warszawa',
    company: 'Wyższa Szkoła Technologii Informatycznych',
    func: 'Inżynier (sieci komputerowe)'
  },
  {
    date: '2003 – 2005',
    place: 'Warszawa',
    company:
      'Zespół Szkół Elektronicznych i Licealnych - Technikum Elektroniczne nr 3',
    func: 'Technik Elektronik'
  }
]

export const EducationSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>EDUKACJA</h3>
      <div className="col section-content">
        {education.map((school) => {
          return (
            <div className="row education">
              <div className="col-4 education-info">
                <div className={'date'}>{school?.date}</div>
                <div className={'place'}>{school?.place}</div>
              </div>
              <div className="col education-info">
                <div className={'company'}>{school?.company}</div>
                <div className={'func'}>{school?.func}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
