import React, { ReactElement } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.scss'
import 'bootstrap'

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
        <h3 className={'section-head'}>EDUCATION</h3>
        <div className="col section-content">
          <div className="row education">
            <div className="col-4 education-info">
              <div className={'date'}>2006 – 2010</div>
              <div className={'place'}>Warszawa</div>
            </div>
            <div className="col education-info">
              <div className={'company'}>
                Wyższa Szkoła Technologii Informatycznych w Warszawie
              </div>
              <div className={'function'}>Inżynier</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row section">
        <h3 className={'section-head'}>WORK EXPERIENCE</h3>
        <div className="col section-content">
          <div className="row experience">
            <div className="col-4 experience-info">
              <div className={'date'}>February 2019 – April 2020</div>
              <div className={'place'}>Warsaw</div>
            </div>
            <div className="col experience-info">
              <div className={'function'}>Junior Frontend Developer</div>
              <div className={'company'}>ORBA Sp.z o.o.</div>
            </div>
          </div>
          <div className="row experience">
            <div className="col-4 experience-info">
              <div className={'date'}>October 2017 – December 2017</div>
              <div className={'place'}>Warsaw</div>
            </div>
            <div className="col experience-info">
              <div className={'function'}>Frontend developer</div>
              <div className={'company'}>Perspektywy Press</div>
            </div>
          </div>
          <div className="row experience">
            <div className="col-4 experience-info">
              <div className={'date'}>September 2016 – December 2017</div>
              <div className={'place'}>Warsaw</div>
            </div>
            <div className="col experience-info">
              <div className={'function'}>Junior Front end Developer</div>
              <div className={'company'}>ROOTSHER</div>
            </div>
          </div>
          <div className="row experience">
            <div className="col-4 experience-info">
              <div className={'date'}>April 2005 – March 2012</div>
              <div className={'place'}>Karczew</div>
            </div>
            <div className="col experience-info">
              <div className={'function'}>Administrator sieci</div>
              <div className={'company'}>Mlekomat Sp. Jawna</div>
            </div>
          </div>
          <div className="row experience">
            <div className="col-4 experience-info">
              <div className={'date'}>December 2008 – December 2009</div>
              <div className={'place'}>Warsaw</div>
            </div>
            <div className="col experience-info">
              <span> Helpdesk at eFuzja</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row section">
        <h3 className={'section-head'}>SKILLS</h3>
        <div className="col-4 skills-col" />
        <div className="col skills-col" style={{ columns: 2 }}>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>HTML5/CSS3/SCSS (RWD)</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Javascript (ES6)</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Browser Compatibility</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}> Git</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>React/redux/react-router</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>VueJS/vuex/vue-router</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>REST API/axios/fetch</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★★☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>jQuery/Zepto</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Jest/Enzyme</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Cypress/StoryBook</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>
                Scrum/Kanban (Jira/Trello/Assembla)
              </span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>
                Linux (Fedora, Debian, Gentoo)
              </span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★★☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Docker/Compose/Vagant</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>yarn/npm/parcel</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Python/Bash/Go</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>MySQL/PostreSQL</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>MongoDB/Redis/Cassanda</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>babel/webpack/gulp</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★★☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>underscore/lodash/ramda</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>TypeScript</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}> NestJS</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Design patterns</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★☆☆☆☆</span>
            </div>
          </div>

          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Node JS</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>

          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>express/restify</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Bootstrap/Material-UI</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★★☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>KnockoutJS</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Elasticsearch</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>React Native</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★☆☆☆☆</span>
            </div>
          </div>
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Magento 2 - Frontend</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row section">
        <h3 className={'section-head'}>LANGUAGES</h3>
        <div className="col-4 section-content"> </div>
        <div className="col section-content">
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>English</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★☆☆☆</span>
            </div>
          </div>
        </div>
        <div className="col-4 skills-col">
          <div className={'row skill'}>
            <div className={'col'}>
              <span className={'skill-name'}>Polish</span>
            </div>
            <div className={'col-4'}>
              <span className={'skill-score'}>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row section" style={{ pageBreakAfter: 'always' }}>
        <h3 className={'section-head'}>HOBBIES </h3>
        <div className="col-4 section-content"> </div>
        <div className="col section-content section-hobbies">
          <span className={'hobbies-name'}> Cycling, Sailing</span>
        </div>
      </div>
      <div className="row section">
        <h3 className="section-head">REFERENCES</h3>
        <div className="col-4 section-content"> </div>
        <div className="col" style={{ columns: 1 }}>
          <div className="row reference">
            <div className="info">
              <div className={'name'}>Konrad Kowalski</div>
              <div className={'company'}>ROOTSHER</div>
            </div>
            <div className="contact">
              <div className={'email'}>rootsher@gmail.com</div>
              <div className={'phone'}>694-977-740</div>
            </div>
          </div>
          <div className="row reference">
            <div className="info">
              <div className={'name'}>Maciej Erchard</div>
              <div className={'company'}>Perspektywy Press</div>
            </div>

            <div className="contact">
              <div className={'email'}>maciej.erchard@gmail.com</div>
              <div className={'phone'}>509-047-574</div>
            </div>
          </div>
          <div className="row reference">
            <div className="info">
              <div className={'name'}>Jan Grądzki</div>
              <div className={'company'}>ORBA Sp.z o.o.</div>
            </div>
            <div className="contact">
              <div className={'phone'}>500-309-829</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row section">
        <h3 className={'section-head'}>EXTRA-CURRICULAR ACTIVITIES</h3>
        <div className="col section-content">
          <div className="row activity">
            <div className="col-4 activity-info">
              <div className={'date'}>September 2003 – June 2009</div>
              <div className={'place'}>Warszawa</div>
            </div>
            <div className="col activity-info">
              <div className={'function'}>Social Instructor</div>
              <div className={'company'}>Youth Palace</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row section">
        <h3 className={'section-head'}>COURSES</h3>
        <div className="col section-content">
          <div className="row course">
            <div className="col-4 course-info">
              <div className={'date'}>September 2016</div>
            </div>
            <div className="col course-info">
              <div className={'function'}>JavaScript</div>
              <div className={'company'}>ROOTSHER</div>
            </div>
          </div>

          <div className="row course">
            <div className="col-4 course-info">
              <div className={'date'}>February 2020</div>
            </div>
            <div className="col course-info">
              <div className={'function'}>DevMeeting Blockchain</div>
              <div className={'company'}>360codelab by Daniel Kmak</div>
            </div>
          </div>
          <div className="row course">
            <div className="col-4 course-info">
              <div className={'date'}>April 2020</div>
            </div>
            <div className="col course-info">
              <div className={'function'}>React Native Workshop</div>
              <div className={'company'}>
                DevMeetings by Sebastian Mysakowski
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
