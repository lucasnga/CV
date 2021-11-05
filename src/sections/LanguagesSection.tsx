import React from 'react'
import { Skill } from '../components/Skill/Skill'

const languages = [
  {
    name: 'English',
    value: 2
  },
  {
    name: 'Polish',
    value: 5
  }
]

const signs = {
  solid: '★',
  hollow: '☆'
}

export const LanguagesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>LANGUAGES</h3>
      <div className="col-4 section-content" />
      {languages.map(({ name, value }) => {
        const filled = Array(5).fill(signs.solid, 0, 5) as string[]
        filled.fill(signs.hollow, value, 5)

        return (
          <div key={name} className="col section-content">
            <Skill name={name} value={value} />
          </div>
        )
      })}
    </>
  )
}
