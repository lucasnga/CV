import React from 'react'

const signs = {
  solid: '★',
  hollow: '☆'
}

export function Skill({
  name,
  value,
  range = 5
}: {
  name: string
  value: number
  range?: number
}): JSX.Element {
  const filled = Array(range)
    .fill(signs.solid, 0, range)
    .fill(signs.hollow, value, range) as string[]

  return (
    <div className={'row skill pb-1'}>
      <div className={'col'}>
        <span className={'skill-name'}>{name}</span>
      </div>
      <div className={'col-3 p-0'}>
        <span className={'skill-score'}>{filled.join('').toString()}</span>
      </div>
    </div>
  )
}
