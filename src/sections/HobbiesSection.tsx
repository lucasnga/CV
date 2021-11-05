import React from 'react'

const hobbies = ['Cycling', 'Sailing']

export const HobbiesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head col'}>HOBBIES </h3>
      <div className="col-8 section-content section-hobbies">
        <span className={'hobbies-name'}>{hobbies.join(', ')}</span>
      </div>
    </>
  )
}
