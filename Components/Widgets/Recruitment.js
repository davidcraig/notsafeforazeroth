import React from 'react'
import { Card } from '@davidcraig/react-bulma'

const classStatuses = [
  { name: 'Priest',       status: 'Open', css: 'fg-priest' },
  { name: 'Mage',         status: 'Open', css: 'fg-mage' },
  { name: 'Warlock',      status: 'Open', css: 'fg-warlock' },
  { name: 'Druid',        status: 'Open', css: 'fg-druid' },
  { name: 'Rogue',        status: 'Open', css: 'fg-rogue' },
  { name: 'Demon Hunter', status: 'Open', css: 'fg-demonhunter' },
  { name: 'Monk',         status: 'Open', css: 'fg-monk' },
  { name: 'Hunter',       status: 'Open', css: 'fg-hunter' },
  { name: 'Shaman',       status: 'Open', css: 'fg-shaman' },
  { name: 'Evoker',       status: 'Open', css: 'fg-evoker' },
  { name: 'Paladin',      status: 'Open', css: 'fg-paladin' },
  { name: 'Warrior',      status: 'Open', css: 'fg-warrior' },
  { name: 'Death Knight', status: 'Open', css: 'fg-deathknight' },
]

function getStatusClass (classStatus) {
  const status = classStatus.status

  switch(status) {
    case 'Closed':
      return 'recruitment-closed'
    case 'Open':
      return 'recruitment-open'
    default:
      return status
  }
}

export default function Recruitment() {
  return (
    <Card title='Recruitment' className='widget widget-recruitment'>
      <table className='table is-narrow is-striped'>
        <tbody>
          {classStatuses.map(s => {
            return <tr key={s.css}>
              <td className={`${s.css} px-2 py-1`}>{s.name}</td>
              <td className={`${getStatusClass(s)} px-2 py-1`}>{s.status}</td>
            </tr>
          })}
        </tbody>
      </table>
    </Card>
  )
}
