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
        <div className="col-8">
          <WorkExperienceSection />
          <div className="row section">
            <ExtraActivitiesSection />
          </div>
        </div>
        <div className="col-4">
          <SkillsSection />
          <LanguagesSection />
        </div>
      </div>
      <div className="row section" style={{ pageBreakAfter: 'always' }}>
        <CoursesSection />
      </div>
      <div className="row section fixed">
        <RODO />
      </div>
    </div>
  )
}

export default App
