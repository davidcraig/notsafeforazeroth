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
  Hoarfróst: { class: wowClasses.DeathKnight, name: 'Hoarfróst', role: ROLES.DPS },
  // Tom
  Demonbanger: { class: wowClasses.Warlock, name: 'Demonbanger', role: ROLES.DPS },
  Skiradan: { class: wowClasses.DemonHunter, name: 'Skiradan', role: ROLES.DPS },

  /// Enforcers

  // Melzy
  Melzyshocker: { class: wowClasses.Shaman, name: 'Melzyshocker', role: ROLES.Healer },
  Downyanixs: { class: wowClasses.Mage, name: 'Downyanixs', role: ROLES.DPS },

  /// Members

  // Dødsrytter
  Dødsrytter: { class: wowClasses.DeathKnight, name: 'Dødsrytter ', role: ROLES.Tank },
  // Dutchey
  Dutcheyagain: { class: wowClasses.Warrior, name: 'Dutcheyagain ', role: ROLES.DPS },
  // Crassius
  Crássiúss: { class: wowClasses.Hunter, name: 'Crássiúss', role: ROLES.DPS },
  Twiggss: { class: wowClasses.Mage, name: 'Twiggss', role: ROLES.DPS },
  // Walshy
  Walshy: { class: wowClasses.Paladin, name: 'Walshy', role: ROLES.DPS },
  // Lahtac
  Lahtac: { class: wowClasses.DemonHunter, name: 'Lahtac', role: ROLES.DPS },
  // Shldor
  Shldor: { class: wowClasses.Rogue, name: 'Shldor', role: ROLES.DPS },
  // Nihäo
  Nihäo: { class: wowClasses.Monk, name: 'Nihäo', role: ROLES.DPS },
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
      main: characters.Snipevoke,
      alts: [
        characters.Sniperwar
      ]
    },
    {
      real: 'Rob',
      rank: RANKS.Officer,
      main: characters.Whoorelips
    },
    {
      real: 'Gary',
      rank: RANKS.Officer,
      main: characters.Palabellum,
      alts: [ characters.Hoarfróst ]
    },
    {
      real: 'Tom',
      rank: RANKS.Officer,
      main: characters.Skiradan,
      alts: [ characters.Demonbanger ]
    },
  ],
  enforcers: [
    {
      rank: RANKS.Member,
      main: characters.Melzyshocker,
      alts: [
        characters.Downyanixs
      ]
    },
  ],
  members: [
    {
      rank: RANKS.Member,
      main: characters.Dødsrytter
    },
    {
      rank: RANKS.Member,
      main: characters.Dutcheyagain
    },
    {
      rank: RANKS.Member,
      main: characters.Crássiúss
    },
    {
      rank: RANKS.Member,
      main: characters.Walshy
    },
    {
      rank: RANKS.Member,
      main: characters.Shldor
    },
  ]
}

roster.combined = [...roster.officers, ...roster.enforcers, ...roster.members]

const getCardTitle = (m) => {
  let fragment = (
    <>
      {m.main?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={m.main.role.icon} />
      )}
      {m.main?.name}{m.real && ` (${m.real})`}
    </>
  )

  return fragment
}

const renderAlt = (alt) => {
  return <>
    <p className={`fg-${alt.class?.css}`}>
      {alt?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={alt.role.icon} />
      )}
      {alt.name}
    </p>
  </>
}

export default function Roster() {
  return <Page>
    <h1 className='h1'>Roster</h1>
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      {roster.combined.map(m => {
        return <Card title={getCardTitle(m)} className={m.main?.class?.css}>
          {m.alts && (
            m.alts.map(alt => renderAlt(alt))
          )}
        </Card>
      })}
    </div>

    <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      <Card title="Role Composition ~">
        <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.DPS.icon} /> {roster.combined.filter(m => m.main.role.name === "DPS").length}</div>
        <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Tank.icon} /> {roster.combined.filter(m => m.main.role.name === "Tank").length}</div>
        <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Healer.icon} /> {roster.combined.filter(m => m.main.role.name === "Healer").length}</div>
      </Card>

      <Card title="Class Composition ~">
        {/* Cloth */}
        <div className='fg-mage'>Mage: {roster.combined.filter(m => m.main.class.name === "Mage").length}</div>
        <div className='fg-priest'>Priest: {roster.combined.filter(m => m.main.class.name === "Priest").length}</div>
        <div className='fg-warlock'>Warlock: {roster.combined.filter(m => m.main.class.name === "Warlock").length}</div>
        {/* Leather */}
        <div className='fg-druid'>Druid: {roster.combined.filter(m => m.main.class.name === "Druid").length}</div>
        <div className='fg-rogue'>Rogue: {roster.combined.filter(m => m.main.class.name === "Rogue").length}</div>
        <div className='fg-monk'>Monk: {roster.combined.filter(m => m.main.class.name === "Monk").length}</div>
        <div className='fg-demonhunter'>Demon Hunter: {roster.combined.filter(m => m.main.class.name === "Demon Hunter").length}</div>
        {/* Mail */}
        <div className='fg-hunter'>Hunter {roster.combined.filter(m => m.main.class.name === "Hunter").length}</div>
        <div className='fg-shaman'>Shaman {roster.combined.filter(m => m.main.class.name === "Shaman").length}</div>
        <div className='fg-evoker'>Evoker {roster.combined.filter(m => m.main.class.name === "Evoker").length}</div>
        {/* Plate */}
        <div className='fg-warrior'>Warrior {roster.combined.filter(m => m.main.class.name === "Warrior").length}</div>
        <div className='fg-paladin'>Paladin {roster.combined.filter(m => m.main.class.name === "Paladin").length}</div>
        <div className='fg-deathknight'>Death Knight {roster.combined.filter(m => m.main.class.name === "Death Knight").length}</div>
      </Card>
    </div>
  </Page>
}
