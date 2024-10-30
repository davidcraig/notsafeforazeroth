import React from 'react'
import { ItemGrid } from '@davidcraig/react-bulma'
import PageWithWidgets from '../Components/PageWithWidgets'
import Page from '../Components/Page'
import { Card } from '@davidcraig/react-bulma/dist/Card/Card'
import wowClasses from '../data/wow-classes'

const RANKS = {
  Officer: 'Officer',
  Member: 'Member'
}

const ROLES = {
  DPS: { name: 'DPS', icon: '/img/wow/dps.png' },
  Tank: { name: 'Tank', icon: '/img/wow/tank.png' },
  Healer: { name: 'Healer', icon: '/img/wow/healer.png' },
}

const characters = {
  // Chris
  Violatór: { name: 'Violatór', class: wowClasses.Rogue, role: ROLES.DPS },
  // Dave (Sniper)
  Snipevoke: { class: wowClasses.Evoker, name: 'Snipevoke', role: ROLES.DPS },
  Sniperwar: { class: wowClasses.Warrior, name: 'Sniperwar', role: ROLES.DPS },
  // Rob
  Whoorelips: { class: wowClasses.Hunter, name: 'Whoorelips', role: ROLES.DPS },
  // Gary
  Palabellum: { class: wowClasses.Paladin, name: 'Palabellum', role: ROLES.DPS },
  // Tom


  /// Members

  // Crassius
  Crássiúss: { class: wowClasses.Hunter, name: 'Crássiúss', role: ROLES.DPS },
}

const roster = {
  officers: [
    {
      real: 'Chris',
      rank: RANKS.Officer,
      main: {
        class: wowClasses.Paladin,
        name: 'Aronin',
        role: ROLES.Tank
      }
    },
    {
      real: 'Dave / Sniper',
      rank: RANKS.Officer,
      main: characters.Snipevoke
    },
    {
      real: 'Rob',
      rank: RANKS.Officer,
      main: characters.Whoorelips
    },
    {
      real: 'Gary',
      rank: RANKS.Officer,
      main: characters.Palabellum
    },
  ],
  members: [
    {
      rank: RANKS.Member,
      main: characters.Crássiúss
    }
  ]
}

roster.combined = [...roster.officers, ...roster.members]

const getCardTitle = (m) => {
  let fragment = (
    <>
      {m.main?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={m.main.role.icon} />
      )}
      {m.main?.name}{m.real && ` (${m.real})`}
    </>
  )

  return fragment
}

export default function Roster() {
  return <Page>
    <h1 className='h1'>Roster</h1>
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      {roster.combined.map(m => {
        return <Card title={getCardTitle(m)} className={m.main?.class?.css}></Card>
      })}
    </div>

    <h2 className='h2'>Composition</h2>
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
      <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.DPS.icon} /> {roster.combined.filter(m => m.main.role.name === "DPS").length}</div>
      <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Tank.icon} /> {roster.combined.filter(m => m.main.role.name === "Tank").length}</div>
      <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Healer.icon} /> {roster.combined.filter(m => m.main.role.name === "Healer").length}</div>
    </div>
  </Page>
}
