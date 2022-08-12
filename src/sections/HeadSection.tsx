import React from 'react'

export const HeadSection = (): JSX.Element => {
  return (
    <>
      <div className="col-sm-9 col-xs-12 header">
        <div className="row nameRole">
          <div className="col-7 name">
            <h1>Łukasz Anuszkiewicz</h1>
          </div>
          <div className="col-5 text-center possession">
            <h4 className={'accent'}>Fullstack Engineer</h4>
          </div>
        </div>
      </div>
      <div className="col-3 avatarBox">
        <div className="avatar" />
      </div>
    </>
  )
}
