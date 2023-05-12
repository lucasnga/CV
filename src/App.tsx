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
import { HobbiesSection } from './sections/HobbiesSection'
import { InfoBox } from './sections/InfoBox'
import { useTranslation } from 'react-i18next'

function App(): ReactElement {
  const { i18n } = useTranslation()

  const changeLanguageHandler = async (): Promise<void> => {
    if (i18n.language == 'en') {
      await i18n.changeLanguage('pl')
    } else {
      await i18n.changeLanguage('en')
    }
  }

  return (
    <div className="App">
      <button
        className="btn btn-success"
        onClick={(): Promise<void> => changeLanguageHandler()}
      >
        {i18n.language == 'en' ? 'to pl' : 'na ang'}
      </button>

      <div className="row section-head">
        <HeadSection />
      </div>
      <div className="row section">
        <div className="col-sm-8 col-xs-12">
          <WorkExperienceSection />
        </div>
        <div className="col-sm-4 col-xs-12 pt-5">
          <div className="pt-5"></div>
          <InfoBox />
          <SkillsSection />
          <div className="section">
            <LanguagesSection />
          </div>
          <div className="row section">
            <HobbiesSection />
          </div>
        </div>
      </div>
      <div className="row section">
        <EducationSection />
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
