import React from 'react'
import { Reference } from '../components/Reference/Reference'

const references = [
  {
    name: 'Konrad Kowalski',
    company: 'ROOTSHER',
    email: 'rootsher@gmail.com',
    phone: '694977740'
  },
  {
    name: 'Maciej Erchard',
    company: 'Perspektywy Press',
    email: 'maciej.erchard@gmail.com',
    phone: '509047574'
  },
  {
    name: 'Jan Grądzki',
    company: 'ORBA Sp.z o.o.',
    phone: '500-309-829',
    email: ''
  }
]

export const ReferencesSection = (): JSX.Element => {
  return (
    <>
      <h3 className="section-head">REFERENCES</h3>
      <div className="col-4 section-content" />
      <div className="col" style={{ columns: 1 }}>
        {references.map((reference) => (
          <Reference
            key={reference.phone}
            name={reference.name}
            company={reference.company}
            email={reference.email}
            phone={reference.phone}
          />
        ))}
      </div>
    </>
  )
}
