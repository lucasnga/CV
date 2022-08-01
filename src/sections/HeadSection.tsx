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
            <h4 className={'accent'}>Frontend Developer</h4>
          </div>
        </div>
        <div className="row infoBox">
          <div className="col-sm-6 col-xs-12">
            <div className="row info-row">
              <div className="col-4">
                <span className={'info-row-head'}>Mieszkam w</span>
              </div>
              <div className="col-6">
                <div className={'info-row-value'}>Warszawie</div>
              </div>
            </div>
            <div className="row info-row">
              <div className="col-4">
                <span className={'info-row-head'}>Email</span>
              </div>
              <div className="col-6">
                <span className={'info-row-value'}>
                  lucasnga.official@gmail.com
                </span>
              </div>
            </div>
            <div className="row info-row">
              <div className="col-4">
                <span className={'info-row-head'}>Linki</span>
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
          <div className="col-sm-6 col-xs-12">
            <div className="row info-row">
              <div className="col-4">
                <span className={'info-row-head'}>Telefon</span>
              </div>
              <div className="col-6">
                <span className={'info-row-value'}>509-232-926</span>
              </div>
            </div>
            <div className="row info-row">
              <div className="col-4">
                <span className={'info-row-head'}>Data/Miejsce urodzenia</span>
              </div>
              <div className="col-6">
                <span className={'info-row-value'}>1984-09-26 Warszawa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 pe-0 avatarBox">
        <div className="avatar" />
      </div>
    </>
  )
}
