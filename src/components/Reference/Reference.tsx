import React from 'react'

export function Reference({
  name,
  company,
  email,
  phone
}: {
  name: string
  company: string
  email: string
  phone: string
}): JSX.Element {
  return (
    <div className="row reference">
      <div className="info">
        <div className={'name'}>{name}</div>
        <div className={'company'}>{company}</div>
      </div>
      <div className="contact">
        <div className={'email'}>{email}</div>
        <div className={'phone'}>{phone}</div>
      </div>
    </div>
  )
}
