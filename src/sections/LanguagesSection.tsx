import React from 'react'
import { Skill } from '../components/Skill/Skill'

const languages = [
  {
    name: 'Angielski',
    value: 3
  },
  {
    name: 'Polski',
    value: 6
  }
]

export const LanguagesSection = (): JSX.Element => {
  return (
    <>
      <div className="row">
        <h3 className={'section-head pt-2 text-end'}>JĘZYKI</h3>
      </div>
      {languages.map(({ name, value }) => {
        return <Skill key={name} name={name} value={value} range={6} />
      })}
    </>
  )
}
