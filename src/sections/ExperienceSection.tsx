import React from 'react'
import { Experience } from '../components/Experience/Experience'

const expiriences = [
  {
    date: 'Feb 2019 – Apr 2020',
    func: 'Junior Frontend Developer',
    company: 'ORBA Sp.z o.o.',
    place: 'Warsaw',
    details: [
      'Modyfikacja widoków sklepu internetowego Magento, VueStoreFront',
      'Praca z wieloma frameworkami: React, Vue oraz KnockoutJS',
      'Tworzenie aplikacji SPA w JS z React dla Magento',
      'Praca z systemem kontroli wersji GIT, oprogramowaniem do zarządzania projektem Ansible oraz Jira, w wielu dynamicznych zespołach'
    ]
  },
  {
    date: 'Oct 2017 – Dec 2017',
    func: 'Frontend developer',
    company: 'Perspektywy Press',
    place: 'Warsaw',
    details: [
      'Opracowywanie widoków (HTML + SCSS + PS)',
      'Praca z systemem CMS Joomla'
    ]
  },
  {
    date: 'Sep 2016 – Sep 2017',
    func: 'Junior Frontend Developer',
    company: 'ROOTSHER',
    place: 'Warsaw',
    details: [
      'opracowywanie widoków oraz tworzenie landing pages (HTML, CSS, React)',
      'Praca z systemem CMS Wordpress, frameworkiem NextJS, React'
    ]
  },
  {
    date: 'Dec 2008 – Dec 2009',
    func: 'Helpdesk',
    company: 'eFuzja',
    place: 'Warsaw',
    details: [
      'Konf. oprogramowania, sprzętu, urządzeń sieciowych dla klientów',
      'Konfiguracja sieciowych urządzeń aktywnych, konserwacja oraz układanie okablowania sieciowego'
    ]
  },
  {
    date: 'Apr 2005 – Mar 2012',
    func: 'Administrator sieci',
    company: 'Mlekomat Sp.Jawna',
    place: 'Karczew',
    details: [
      'Konfiguracja sprzętu sieciowego w firmie oraz urządzeń zdalnych',
      'Zarządzanie serwerem usług sieciowych SMTP, POP3, SAMBA, RD (Linux)',
      'Tworzenie i zarządzanie środowiskiem pracy w firmie, konfiguracja sprzętu komputerowego oraz rozwiązywanie problemów z oprogramowaniem'
    ]
  }
]

export const WorkExperienceSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>WORK EXPERIENCE</h3>
      <div className="col section-content">
        {expiriences.map(({ date, place, func, company, details }) => (
          <Experience
            key={company}
            date={date}
            place={place}
            func={func}
            company={company}
            details={details}
          />
        ))}
      </div>
    </>
  )
}
