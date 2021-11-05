import React from 'react'
import { Experience } from '../components/Experience/Experience'

const expiriences = [
  {
    date: 'February 2019 – April 2020',
    func: 'Junior Frontend Developer',
    company: 'ORBA Sp.z o.o.',
    place: 'Warsaw'
  },
  {
    date: 'October 2017 – December 2017',
    func: 'Frontend developer',
    company: 'Perspektywy Press',
    place: 'Warsaw'
  },
  {
    date: 'September 2016 – September 2017',
    func: 'Junior Frontend Developer',
    company: 'ROOTSHER',
    place: 'Warsaw'
  },
  {
    date: 'April 2005 – March 2012',
    func: 'Administrator sieci',
    company: 'Mlekomat Sp.Jawna',
    place: 'Karczew'
  },
  {
    date: 'December 2008 – December 2009',
    func: 'Helpdesk',
    company: 'eFuzja',
    place: 'Warsaw'
  }
]

export const WorkExperienceSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>WORK EXPERIENCE</h3>
      <div className="col section-content">
        {expiriences.map(({ date, place, func, company }) => (
          <Experience
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
