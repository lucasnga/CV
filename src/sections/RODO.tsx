import React from 'react'

const content =
  'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).'

export const RODO = (): JSX.Element => {
  return (
    <>
      <h3 className="section-head"></h3>
      <div className="col px-1" style={{ color: 'rgba(0,0,0, 0.4)' }}>
        <h6 className="rodo">{content}</h6>
      </div>
    </>
  )
}
