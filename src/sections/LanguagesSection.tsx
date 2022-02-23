import React from 'react'
import { Skill } from '../components/Skill/Skill'

const languages = [
  {
    name: 'English',
    value: 3
  },
  {
    name: 'Polish',
    value: 6
  }
]

export const LanguagesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head col'}>LANGUAGES</h3>
      {languages.map(({ name, value }) => {
        return (
          <div key={name} className="col section-content">
            <Skill name={name} value={value} range={6} />
          </div>
        )
      })}
    </>
  )
}
