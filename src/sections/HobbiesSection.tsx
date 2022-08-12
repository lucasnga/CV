import React from 'react'

const hobbies = ['Jazda na rowerze', 'Żeglarstwo']

export const HobbiesSection = (): JSX.Element => {
  return (
    <>
      <h3 className={'section-head text-end pt-3 pb-2 m-0'}>HOBBY</h3>
      <div className="section-content section-hobbies text-end">
        <span className={'hobbies-name'}>{hobbies.join(', ')}</span>
      </div>
    </>
  )
}
