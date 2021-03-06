import React, { ReactElement } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.scss'
import 'bootstrap'

import { SkillsSection } from './sections/SkillsSection'
import { CoursesSection } from './sections/CoursesSection'
import { ExtraActivitiesSection } from './sections/ExtraActivitiesSection'
import { WorkExperienceSection } from './sections/ExperienceSection'
import { LanguagesSection } from './sections/LanguagesSection'
import { EducationSection } from './sections/EducationSection'
import { HeadSection } from './sections/HeadSection'
import { RODO } from './sections/RODO'

function App(): ReactElement {
  return (
    <div className="App">
      <div className="row headSection">
        <HeadSection />
      </div>
      <div className="row section">
        <EducationSection />
      </div>
      <div className="row section justify-content-between">
        <div className="col-sm-8 col-xs-12">
          <WorkExperienceSection />
          <div className="row section">
            <ExtraActivitiesSection />
          </div>
        </div>
        <div className="col-sm-4 col-xs-12">
          <SkillsSection />
          <LanguagesSection />
        </div>
      </div>
      <div className="row section" style={{ pageBreakAfter: 'always' }}>
        <CoursesSection />
      </div>
      <div className="row section fixed">
        <RODO />
        <h6 className="px-1 m-0">
          Aktualna wersja:{' '}
          <a href="https://lucasnga.github.io/CV/">
            https://lucasnga.github.io/CV/
          </a>
        </h6>
      </div>
    </div>
  )
}

export default App
