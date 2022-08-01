import React from 'react'
import { Skill } from '../components/Skill/Skill'

const skills = [
  { value: 4, name: 'Linux (Fedora / Debian)' },
  { value: 4, name: 'REST API / axios / fetch' },
  { value: 4, name: 'babel / webpack / gulp' },
  { value: 4, name: 'Bootstrap / Material-UI' },
  { value: 3, name: 'Javascript / TypeScript' },
  { value: 3, name: 'React (redux / router)' },
  { value: 3, name: 'HTML / CSS / SCSS' },
  { value: 3, name: 'Git' },
  { value: 3, name: 'yarn / npm / parcel' },
  { value: 3, name: 'Docker / Vagant' },
  { value: 3, name: 'MySQL / PostreSQL' },
  { value: 3, name: 'lodash / ramda' },
  { value: 2, name: 'VueJS (vuex / router)' },
  {
    value: 2,
    name: 'Testing (Jest / Cypress)'
  },
  { value: 2, name: 'Scrum / Kanban (Jira / Assembla)' },
  { value: 2, name: 'Python / Bash (Scripting) ' },
  { value: 2, name: 'MongoDB / Redis' },
  { value: 2, name: 'Node JS / NestJS / express' },
  { value: 2, name: 'Elasticsearch' },
  { value: 2, name: 'Magento 2 - Frontend (KnockoutJS / jQuery)' },
  { value: 1, name: 'React Native / Expo' },
  { value: 1, name: 'Design patterns' }
]

export const SkillsSection = (): JSX.Element => {
  return (
    <>
      <div className="row">
        <h3 className={'section-head text-end'}>UMIEJĘTNOŚCI</h3>
      </div>
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} value={skill.value} />
      ))}
    </>
  )
}
