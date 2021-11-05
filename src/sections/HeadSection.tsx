import React from 'react'

export const HeadSection = (): JSX.Element => {
  return (
    <>
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
                <div className={'info-row-value'}>Pawia 4</div>
                <div className={'info-row-value'}>Warszawa, 00-164</div>
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
    </>
  )
}
