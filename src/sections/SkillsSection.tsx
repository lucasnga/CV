import React from 'react'
import { Skill } from '../components/Skill/Skill'

const skills = [
  { value: 3, name: 'HTML / CSS / SCSS' },
  { value: 3, name: 'Javascript / TypeScript' },
  { value: 3, name: 'Git' },
  { value: 3, name: 'React (redux / router)' },
  { value: 2, name: 'VueJS (vuex / router)' },
  { value: 4, name: 'REST API / axios / fetch' },
  {
    value: 2,
    name: 'Testing (Jest / Cypress)'
  },
  { value: 2, name: 'Scrum / Kanban (Jira / Assembla)' },
  { value: 4, name: 'Linux (Fedora / Debian)' },
  { value: 3, name: 'Docker / Vagant' },
  { value: 3, name: 'yarn / npm / parcel' },
  { value: 2, name: 'Python / Bash (Scripting) ' },
  { value: 3, name: 'MySQL / PostreSQL' },
  { value: 2, name: 'MongoDB / Redis' },
  { value: 4, name: 'babel / webpack / gulp' },
  { value: 3, name: 'lodash / ramda' },
  { value: 1, name: 'Design patterns' },
  { value: 2, name: 'Node JS / NestJS / express' },
  { value: 4, name: 'Bootstrap / Material-UI' },
  { value: 2, name: 'Elasticsearch' },
  { value: 1, name: 'React Native / Expo' },
  { value: 2, name: 'Magento 2 - Frontend (KnockoutJS / jQuery)' }
]

export const SkillsSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>SKILLS</h3>
      <div className="col skills-col" style={{ columns: 3 }}>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </div>
    </>
  )
}
