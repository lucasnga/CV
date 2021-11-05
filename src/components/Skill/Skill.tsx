import React from 'react'

const signs = {
  solid: '★',
  hollow: '☆'
}

export function Skill({
  name,
  value
}: {
  name: string
  value: number
}): JSX.Element {
  const filled = Array(5)
    .fill(signs.solid, 0, 5)
    .fill(signs.hollow, value, 5) as string[]

  return (
    <div className={'row skill pb-1'}>
      <div className={'col'}>
        <span className={'skill-name'}>{name}</span>
      </div>
      <div className={'col-4'}>
        <span className={'skill-score'}>{filled.join('').toString()}</span>
      </div>
    </div>
  )
}
