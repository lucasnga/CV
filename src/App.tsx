import React, { ReactElement } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.scss'
import 'bootstrap'

import { SkillsSection } from './sections/SkillsSection'
import { CoursesSection } from './sections/CoursesSection'
import { ExtraActivitiesSection } from './sections/ExtraActivitiesSection'
import { ReferencesSection } from './sections/ReferencesSection'
import { WorkExperienceSection } from './sections/ExperienceSection'
import { LanguagesSection } from './sections/LanguagesSection'
import { HobbiesSection } from './sections/HobbiesSection'
import { EducationSection } from './sections/EducationSection'
import { HeadSection } from './sections/HeadSection'
import { RODO } from './sections/RODO'

function App(): ReactElement {
  return (
    <div className="App">
      <div className="row headSection">
        <div className="col-10 header">
          <div className="row nameRole">
            <div className="col-6 name">
              <h1> Łukasz Anuszkiewicz</h1>
            </div>
            <div className="col-6 possession">
              <h4 className={'accent'}>Frontend Developer</h4>
            </div>
          </div>
          <div className="row infoBox">
            <div className="col-6">
              <div className="row info-row">
                <div className="col-4">
                  <span className={'info-row-head'}>Address</span>
                </div>
                <div className="col-6">
                  <div className={'info-row-value'}>Warszawa</div>
                </div>
              </div>
              <div className="row info-row">
                <div className="col-4">
                  <span className={'info-row-head'}>Email</span>
                </div>
                <div className="col-6">
                  <span className={'info-row-value'}>lucasnga.official@gmail.com</span>
                </div>
              </div>
              <div className="row info-row">
                <div className="col-4">
                  <span className={'info-row-head'}>Links</span>
                </div>
                <div className="col-6">
                  <span className={'info-row-value'}>
                    <a href="https://www.linkedin.com/in/lukasz-anuszkiewicz">
                      LinkedIn
                    </a>
                  </span>
                  {', '}
                  <span className={'info-row-value'}>
                    <a href="https://github.com/lucasnga">Github</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row info-row">
                <div className="col-4">
                  <span className={'info-row-head'}>Phone</span>
                </div>
                <div className="col-6">
                  <span className={'info-row-value'}> 509-232-926</span>
                </div>
              </div>
              <div className="row info-row">
                <div className="col-4">
                  <span className={'info-row-head'}>Date / Place of birth</span>
                </div>
                <div className="col-6">
                  <span className={'info-row-value'}>1984-09-26 Warsaw</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 avatarBox">
          <div className="avatar" />
        </div>
      </div>
      <div className="row section">
        <EducationSection />
      </div>
      <div className="row section">
        <WorkExperienceSection />
      </div>
      <div className="row section">
        <SkillsSection />
      </div>
      <div className="row section" style={{ pageBreakAfter: 'always' }}>
        <LanguagesSection />
      </div>
      <div className="row section">
        <HobbiesSection />
      </div>
      <div className="row section">
        <ReferencesSection />
      </div>
      <div className="row section">
        <ExtraActivitiesSection />
      </div>
      <div className="row section">
        <CoursesSection />
      </div>
      <div className="row section fixed">
        <RODO />
      </div>
    </div>
  )
}

export default App
