import React from 'react'

const hobbies = ['Cycling', 'Sailing']

export const HobbiesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head'}>HOBBIES </h3>
      <div className="col-4 section-content" />
      <div className="col section-content section-hobbies">
        <span className={'hobbies-name'}>{hobbies.join(', ')}</span>
      </div>
    </>
  )
}
