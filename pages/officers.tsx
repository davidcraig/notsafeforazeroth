import React from 'react'
import { ItemGrid } from '@davidcraig/react-bulma'
import PageWithWidgets from '../Components/PageWithWidgets'
import { Card } from '@davidcraig/react-bulma/dist/Card/Card'
import Druid from '../data/classes/druid'
import DeathKnight from '../data/classes/dk'
import Hunter from '../data/classes/hunter'
import Sniperdrood from '../data/characters/TarrenMill/Sniperdrood'
import Aronin from '../data/characters/TarrenMill/Aronin'
import Whoorelips from '../data/characters/TarrenMill/Whoorelips'

const officers = [
  {
    real: 'Dave',
    alias: 'Sniper',
    rank: 'Fuhrer',
    bio: '',
    main: Sniperdrood
  },
  {
    real: 'Chris',
    alias: 'Aronin',
    rank: 'Officer',
    bio: '',
    main: Aronin
  },
  {
    real: 'Rob',
    alias: 'Whoorelips',
    rank: 'Officer',
    bio: '',
    main: Whoorelips
  },
]

export default function Officers() {
  return <PageWithWidgets>
    <h1 className='h1'>Officers</h1>
    <ItemGrid columns={2}>
      {officers.map(officer => {
        return <Card title={`${officer.alias} (${officer.real})`} className={officer.main.wowclass.css}></Card>
      })}
    </ItemGrid>
  </PageWithWidgets>
}
