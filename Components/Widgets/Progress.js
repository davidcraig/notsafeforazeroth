import React from 'react'
import { Card } from '@davidcraig/react-bulma'
import { castleNathria } from '../../data/shadowlands/raids'

function getCurrentRaidTier() {
  return null
}

function getStatus (progression) {
  if (!progression.normal) {
    return 'Not yet killed'
  }

  let str = 'Killed: '
  let kills = []

  if (progression.normal) { kills.push('N') }
  if (progression.heroic) { kills.push('HC') }
  if (progression.mythic) { kills.push('M') }
  return str + kills.join(', ')
}

function getStatusClass (progression) {
  if (progression.mythic) { return 'mythic' }
  if (progression.heroic) { return 'heroic' }
  if (progression.normal) { return 'normal' }
  return 'alive'
}

export default function Progress() {
  const progression = getCurrentRaidTier()

  return (
    <Card title='Progression' className='widget widget-progression'>
      <table className='table is-narrow is-striped'>
        <tbody>
          {progression.map(p => {
            const status = getStatus(p)
            const statusClass = getStatusClass(p)

            return <tr key={p.slug} className={statusClass}>
              <td>{p.name}</td>
              <td>{status}</td>
            </tr>
          })}
        </tbody>
      </table>
    </Card>
  )
}
