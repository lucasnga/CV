import React from 'react'
import { Experience } from '../components/Experience/Experience'

const expiriences = [
  {
    date: 'Czerwiec 2020 – Maj 2022',
    func: 'Fullstack / Mobile Developer / DevOps',
    company: 'Dillcom sp. z o.o.',
    place: 'Remote',
    details: [
      'Tworzenie od podstaw aplikacji mobilnej w React Native / Expo',
      'Typescript, MaterialUI, react-hook-form, styled-components, react-i18n',
      'Praca z UI / UX tworzonym w Figma, Zeplin',
      'Współpraca z zespołem Backend / Frontend: Node.js / NestJS / REST / React',
      'Konfiguracja środowiska dev i prod - Docker, docker-compose, VPS',
      'Konfiguracja CI / CD - Bitbucket Pipelines, Docker self-hosted registry',
      'Tworzenie strony SSR z użyciem Next.js'
    ]
  },
  {
    date: 'Luty 2019 – Kwiecień 2020',
    func: 'Frontend Developer',
    company: 'ORBA sp. z o.o.',
    place: 'Warszawa',
    details: [
      'Praca w wielu zróżnicowanych projektach biznesowych',
      'W zależności od projektu praca z React, Vue oraz KnockoutJS',
      'Rozwój aplikacji Single-Page Application (React, REST API) na potrzeby Magento',
      'Praca z modułami Magento, VueStoreFront',
      'Bliska współpraca z Product Ownerem i Scrum Masterem',
      'Pair programing, code review każdego dnia',
      'Praca w Agile (Scrum) - każdego dnia - daily, refinement, retrospective, review',
      'Praca z Jira, Assembla (git)'
    ]
  },
  {
    date: 'Styczeń 2018 - Luty 2019',
    func: 'Freelancer (Fullstack)',
    details: [
      'Tworzenie platformy B2B - NestJS, TypeORM, RabbitMQ, React',
      'Konfiguracja CI / CD - self-hosted Bamboo / Bitbucket Pipelines',
      'Tworzenie skryptów w Python -> Rust, Golang, C / C++'
    ]
  },
  {
    date: 'Październik 2017 – Grudzień 2017',
    func: 'Fullstack Developer',
    company: 'Perspektywy Press sp. z o.o.',
    place: 'Warszawa',
    details: [
      'Rozwój modułów w CMS Joomla (PHP, MySQL)',
      'Praca z Photoshop i cięcie widoków (HTML, SASS, JavaScript)'
    ]
  },
  {
    date: 'Wrzesień 2016 – Wrzrsień 2017',
    func: 'Fullstack Developer',
    company: 'ROOTSHER',
    place: 'Warszawa',
    details: [
      'Praca z Photoshop i cięcie widoków (HTML, SASS, JavaScript)',
      'Realizacja stron internetowych w CMS Wordpress (moduły w PHP)',
      'Tworzenie aplikacji typu Single-Page Application (React, Redux, Webpack)',
      'Rozwój systemu turniejowego (JavaScript, AngularJS -> React, Node.js)'
    ]
  },
  {
    date: 'Kwiecie 2012 - Sierpień 2016',
    func: 'Freelancer (Fullstack)',
    details: [
      'Tworzenie sktyptów w Python / Bash do interakcji z hurtowniami dla sklepów internetowych',
      'Rozwój projektu web promotion helper (do promowania treści na FB, YT, Twitter)',
      'Panel z informacjami statystycznymi dla danej kategorii z Allegro - Python, Web Scraping, HTML, CSS',
      'Scrapery (Python, MongoDB) danych na potrzeby migracji do przeróżnych systemów zarządzania'
    ]
  },
  {},
  {
    date: 'Grudzień 2008 – Grudzień 2009',
    func: 'Administrator IT',
    company: 'eFuzja sp. z o.o.',
    place: 'Warszawa',
    details: [
      'Konfiguracja sieciowych urządzeń aktywnych, konserwacja oraz montaż okablowania sieciowego',
      'Instalacja oprogramowania, sprzętu, urządzeń sieciowych dla klientów firmy',
      'Monitorowanie sieci, sprawne usuwanie awarii'
    ]
  },
  {
    date: 'Kwiecień 2005 – Marzec 2012',
    func: 'Administrator Sieci',
    company: 'Mlekomat sp.j.',
    place: 'Karczew',
    details: [
      'Konfiguracja sprzętu sieciowego oraz urządzeń zdalnych, np. switch, VPN',
      'Zarządzanie serwerem usług sieciowych, np. DNS, DHCP, SMTP, POP3, SAMBA, RD (Linux)',
      'Projektowanie i realizacja infrastruktur sieciowych w firmie',
      'Konfiguracja sprzętu komputerowego oraz rozwiązywanie problemów z oprogramowaniem'
    ]
  }
]

export const WorkExperienceSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head py-3'}>DOŚWIADCZENIE ZAWODOWE</h3>
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
