import React from 'react'
import { Skill } from '../components/Skill/Skill'

const skills = [
  { value: 5, name: 'Linux (Fedora / Debian)' },
  { value: 4, name: 'Node.js / NestJS / Express' },
  { value: 4, name: 'Docker / Kubernetes / Vagrant' },
  { value: 4, name: 'React (redux / router) / React Native' },
  { value: 4, name: 'HTML / CSS Module / SCSS / CSS-in-JS' },
  { value: 4, name: 'babel / webpack / gulp / vite.js' },
  { value: 4, name: 'ECMAScript / TypeScript' },
  { value: 4, name: 'Bootstrap / Material-UI' },
  { value: 4, name: 'REST API / Socket.IO' },
  { value: 4, name: 'MySQL / PostreSQL' },
  { value: 4, name: 'MongoDB / Redis' },
  {
    value: 4,
    name: 'Testing Jest / Cypress'
  },

  { value: 4, name: 'Git, CI / CD / CD' },
  { value: 3, name: 'Python' },
  { value: 2, name: 'Rust, Golang , C / C++' }

  // { value: 4, name: 'yarn / npm / parcel' },
  // { value: 3, name: 'lodash / ramda' },
  // { value: 2, name: 'VueJS (vuex / router)' },
  // { value: 2, name: 'Scrum / Kanban (Jira / Assembla)' },
  // { value: 2, name: 'Elasticsearch' },
  // { value: 2, name: 'Magento 2 - Frontend (KnockoutJS / jQuery)' }
]

export const SkillsSection = (): JSX.Element => {
  return (
    <>
      <div className="section">
        <h3 className={'section-head text-end pt-3 pb-2 m-0'}>UMIEJĘTNOŚCI</h3>
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} value={skill.value} />
        ))}
      </div>
    </>
  )
}
