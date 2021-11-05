import React from 'react'
import { Skill } from '../components/Skill/Skill'

const skills = [
  { value: 3, name: 'HTML / CSS / SCSS (RWD / Compatibility)' },
  { value: 3, name: 'Javascript / TypeScript' },
  { value: 3, name: 'Git' },
  { value: 3, name: 'React / redux / react-router' },
  { value: 2, name: 'VueJS / vuex/ vue-router' },
  { value: 4, name: 'REST API / axios / fetch' },
  {
    value: 2,
    name: 'Testing (Jest / Enzyme, Cypress / StoryBook)'
  },
  { value: 2, name: 'Scrum / Kanban (Jira / Trello / Assembla)' },
  { value: 4, name: 'Linux (Fedora / Debian / Gentoo)' },
  { value: 3, name: 'Docker / Compose / Vagant' },
  { value: 3, name: 'yarn / npm / parcel' },
  { value: 2, name: 'Python / Bash (Scripting) ' },
  { value: 3, name: 'MySQL / PostreSQL' },
  { value: 2, name: 'MongoDB / Redis / Cassanda' },
  { value: 4, name: 'babel / webpack / gulp' },
  { value: 3, name: 'underscore / lodash / ramda' },
  { value: 1, name: 'Design patterns' },
  { value: 2, name: 'Node JS / NestJS / express / restify' },
  { value: 4, name: 'Bootstrap / Material-UI' },
  { value: 2, name: 'Elasticsearch' },
  { value: 1, name: 'React Native' },
  { value: 2, name: 'Magento 2 - Frontend (KnockoutJS / jQuery)' }
]

export const SkillsSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>SKILLS</h3>
      <div className="col-4 skills-col" />
      <div className="col skills-col" style={{ columns: 2 }}>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </div>
    </>
  )
}
