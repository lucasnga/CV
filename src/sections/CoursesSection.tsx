import { Course } from '../components/Course/Course'
import React from 'react'

const courses = [
  { date: 'September 2016', func: 'JavaScript', company: 'ROOTSHER' },
  {
    date: 'February 2020',
    func: 'DevMeeting Blockchain',
    company: '360codelab by Daniel Kmak'
  },
  {
    date: 'April 2020',
    func: 'React Native Workshop',
    company: 'DevMeetings by Sebastian Mysakowski'
  }
]

export const CoursesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>COURSES</h3>
      <div className="col section-content">
        {courses.map((course) => (
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
