import { Course } from '../components/Course/Course'
import React from 'react'

const courses = [
  { date: 'Wrzesień 2016', func: 'JavaScript, React', company: 'ROOTSHER' },
  {
    date: 'Luty 2020',
    func: 'DevMeeting Blockchain',
    company: '360codelab by Daniel Kmak'
  },
  {
    date: 'Kwiecień 2020',
    func: 'React Native Workshop',
    company: 'DevMeetings by Sebastian Mysakowski'
  },
  {
    date: 'Kwiecień 2022',
    func: 'Architektura Na Froncie (w trakcie)',
    company: 'devstyle.pl by Tomasz Ducin'
  }
]

export const CoursesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>KURSY</h3>
      <div className="col section-content">
        {courses
          .slice(0)
          .reverse()
          .map((course) => (
            <Course
              key={course.date}
              date={course.date}
              func={course.func}
              company={course.company}
            />
          ))}
      </div>
    </>
  )
}
