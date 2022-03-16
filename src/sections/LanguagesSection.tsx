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
      <div className="row">
        <h3 className={'section-head pt-2'}>LANGUAGES</h3>
      </div>
      {languages.map(({ name, value }) => {
        return <Skill name={name} value={value} range={6} />
      })}
    </>
  )
}
