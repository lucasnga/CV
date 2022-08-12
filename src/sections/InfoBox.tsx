import React from 'react'

export const InfoBox = (): JSX.Element => (
  <>
    <div className="pt-5" />
    <div className="pt-2" />
    <div className="row">
      <h3 className="section-head text-end pt-3">O MNIE</h3>
    </div>
    <div className="infoBox section">
      <div className="row info-row">
        <span className={'info-row-head'}>E-mail</span>
        <span className={'info-row-value'}>
          <a href="mailto:lucasnga.official@gmail.com">
            lucasnga.official@gmail.com
          </a>
        </span>
      </div>
      <div className="row info-row">
        <span className={'info-row-head'}>Telefon</span>
        <span className={'info-row-value'}>
          <a href="tel:(+48) 509-232-926">(+48) 509-232-926</a>
        </span>
      </div>
      <div className="row info-row">
        <span className={'info-row-head'}>Linki</span>
        <span className={'info-row-value'}>
          <a href="https://www.linkedin.com/in/lukasz-anuszkiewicz">LinkedIn</a>
          {', '}
          <a href="https://github.com/lucasnga">GitHub</a>
        </span>
      </div>
      <div className="row info-row">
        <span className={'info-row-head'}>Data urodzenia</span>
        <span className={'info-row-value'}>1984-09-26</span>
      </div>
      <div className="row info-row">
        <span className={'info-row-head'}>Miejsce zamieszkania</span>
        <div className={'info-row-value'}>Warszawa, Polska</div>
      </div>
    </div>
  </>
)
