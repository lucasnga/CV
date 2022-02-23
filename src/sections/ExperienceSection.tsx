import React from 'react'
import { Experience } from '../components/Experience/Experience'

const expiriences = [
  {
    date: 'Feb 2019 – Apr 2020',
    func: 'Junior Frontend Developer',
    company: 'ORBA Sp.z o.o.',
    place: 'Warsaw'
  },
  {
    date: 'Oct 2017 – Dec 2017',
    func: 'Frontend developer',
    company: 'Perspektywy Press',
    place: 'Warsaw'
  },
  {
    date: 'Sep 2016 – Sep 2017',
    func: 'Junior Frontend Developer',
    company: 'ROOTSHER',
    place: 'Warsaw'
  },
  {
    date: 'Apr 2005 – Mar 2012',
    func: 'Administrator sieci',
    company: 'Mlekomat Sp.Jawna',
    place: 'Karczew'
  },
  {
    date: 'Dec 2008 – Dec 2009',
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
