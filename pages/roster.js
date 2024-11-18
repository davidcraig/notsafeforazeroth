import React from 'react'
import Page from '../Components/Page'
import { Card } from '@davidcraig/react-bulma/dist/Card/Card'
import wowClasses from '../data/wow-classes'
import realms from '../data/realms'
import ROLES from '../data/roles'

const RANKS = {
  Officer: 'Officer',
  Enforcer: 'Enforcer',
  Member: 'Member'
}

let characters = {}
  // // Tom
  

  // /// Enforcers

  // // Melzy
  

  // /// Members

  // // Naezu
  // Naezu: { class: wowClasses.Shaman, name: 'Naezu', role: ROLES.Healer, realm: realms.Silvermoon },
  // // Crassius
  // Twiggss: { class: wowClasses.Mage, name: 'Twiggss', role: ROLES.DPS },
  // // Walshy
  // Walshy: { class: wowClasses.Paladin, name: 'Walshy', role: ROLES.DPS },
  // // Lahtac
  // Lahtac: { class: wowClasses.DemonHunter, name: 'Lahtac', role: ROLES.DPS },
  // // Shldor
  // Shldor: { class: wowClasses.Rogue, name: 'Shldor', role: ROLES.DPS },
  // // Nihäo
  // Nihäo: { class: wowClasses.Monk, name: 'Nihäo', role: ROLES.DPS },

const addCharacter = (name, wowClass, role, realm) => {
  characters[name] = { name, class: wowClass, role, realm }
}

// Chris
addCharacter('Violatór', wowClasses.Rogue, ROLES.DPS, realms.TarrenMill);
addCharacter('Aronin', wowClasses.Paladin, ROLES.Tank, realms.TarrenMill)
// Sniper
addCharacter('Snipevoke', wowClasses.Evoker, ROLES.DPS, realms.TarrenMill);
addCharacter('Sniperwar', wowClasses.Warrior, ROLES.DPS, realms.TarrenMill);
addCharacter('Sniperdrood', wowClasses.Druid, ROLES.DPS, realms.TarrenMill);
addCharacter('Snipedeath', wowClasses.DeathKnight, ROLES.Tank, realms.TarrenMill);
// Rob
addCharacter('Whoorelips', wowClasses.Hunter, ROLES.DPS, realms.TarrenMill);
// Gary
addCharacter('Palabellum', wowClasses.Paladin, ROLES.DPS, realms.TarrenMill);
addCharacter('Hoarfróst', wowClasses.DeathKnight, ROLES.DPS, realms.TarrenMill);
// Tom
addCharacter('Demonbanger', wowClasses.Warlock, ROLES.DPS, realms.TarrenMill);
addCharacter('Skiradan', wowClasses.DemonHunter, ROLES.DPS, realms.TarrenMill);
// Crassius
addCharacter('Crássiúss', wowClasses.Hunter, ROLES.DPS, realms.Kazzak);
addCharacter('Twiggss', wowClasses.Mage, ROLES.DPS, realms.Kazzak);
// Shldor
addCharacter('Shldor', wowClasses.Rogue, ROLES.DPS, realms.TarrenMill);
// Lahtac
addCharacter('Lahtac', wowClasses.DemonHunter, ROLES.DPS, realms.TarrenMill);
// Walshy
addCharacter('Walshy', wowClasses.Paladin, ROLES.DPS, realms.TarrenMill);
// Teflonmanjo
addCharacter('Teflonmanjo', wowClasses.Druid, ROLES.DPS, realms.TarrenMill);
// Gashenmage
addCharacter('Gashenmage', wowClasses.Mage, ROLES.DPS, realms.TarrenMill);
// Tillytubby
addCharacter('Tillytubby', wowClasses.Druid, ROLES.Healer, realms.TarrenMill);
// Polish
addCharacter('Polishperson', wowClasses.DemonHunter, ROLES.DPS, realms.TarrenMill);
// Mehtiina
addCharacter('Mehtiina', wowClasses.Shaman, ROLES.Healer, realms.TarrenMill);

const roster = {
  officers: [
    {
      real: 'Chris',
      rank: RANKS.Officer,
      main: characters.Aronin,
      alts: [
        characters.Violatór
      ]
    },
    {
      real: 'Dave / Sniper',
      rank: RANKS.Officer,
      main: characters.Snipedeath,
      alts: [
        characters.Sniperwar,
        characters.Snipevoke,
        characters.Sniperdrood
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
  enforcers: [],
  members: [
  ]
}

const addMember = (character, alts) => {
  let obj = {
    rank: RANKS.Member,
    main: character
  }

  if (alts) {
    obj.alts = alts
  }

  roster.members.push(obj)
}

addMember(characters.Crássiúss, [characters.Twiggss]);
addMember(characters.Shldor);
addMember(characters.Lahtac);
addMember(characters.Walshy);
addMember(characters.Teflonmanjo);
addMember(characters.Gashenmage);
addMember(characters.Polishperson);
addMember(characters.Tillytubby);
addMember(characters.Mehtiina);

roster.combined = [...roster.officers, ...roster.enforcers, ...roster.members]

const getCardTitle = (m) => {
  if (!m.main) return
  let fragment = (
    <>
      {m.main && m.main?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={m.main.role.icon} />
      )}
      <a target="_blank" rel='noopener noreferrer' className={`fg-${m.main.class.css}`} href={getArmoryLink(m.main?.name, m.main?.realm?.slug)}>{m.main?.name}</a>{m.real && ` (${m.real})`}
    </>
  )

  return fragment
}

const getArmoryLink = (character, realm) => {
  if (!character) return
  if (!realm) { return character }

  return `https://worldofwarcraft.blizzard.com/en-gb/character/eu/${realm}/${character}`
}

const renderAlt = (alt) => {
  return <>
      {alt?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={alt.role.icon} />
      )}
      <a target="_blank" rel='noopener noreferrer' className={`fg-${alt.class.css} mr-4`} href={getArmoryLink(alt.name, alt.realm?.slug)}>{alt.name}</a>
  </>
}

const ClassCompWidget = () => {
  let data = []

  Object.keys(wowClasses).forEach(cl => {
    const wClass = wowClasses[cl]
    data.push({
      key: cl,
      name: wClass.name,
      count: roster.combined.filter(m => m.main?.class?.name === wClass.name).length,
      css: `fg-${wClass.css}-important`
    })
  })

  return (
    <>
      <Card title="Class Composition ~">
        <table>
          <tbody>
            {
              data.map(wowClass => {
                return <tr key={wowClass.key}>
                  <td className={wowClass.css}>{wowClass.name}</td>
                  <td className={wowClass.css}>{wowClass.count}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </Card>
    </>
  )
}

const RosterAsTable = ({ className }) => {
  return (
    <table className={`table table-striped ${className}`}>
      <thead>
        <tr>
          <th>Main</th>
          <th>Alts</th>
        </tr>
      </thead>
      <tbody>
        {roster.combined.map(player => {
          return <tr>
            <td>{getCardTitle(player)}</td>
            <td>{player.alts && (
              player.alts.map(alt => { return renderAlt(alt) })
            )}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default function Roster() {
  return <Page>
    <h1 className='h1 text-xl mb-4'>Roster</h1>
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-2'>

      <RosterAsTable className='lg:col-span-5'></RosterAsTable>

      {/* <main className='flex flex-col grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:col-span-5'>
        {SHOW_ALTS && roster.combined.map(m => {
          return <Card title={getCardTitle(m)} className={m.main?.class?.css}>
            {SHOW_ALTS && m.alts && (
              m.alts.map(alt => renderAlt(alt))
            )}
          </Card>
        })}
        {!SHOW_ALTS && roster.combined.map(m => {
          return <div className={m.main?.class?.css}>{getCardTitle(m)}</div>
        })}
      </main> */}

      <aside className='grid grid-cols-1 lg:col-span-1'>
        <Card title="Role Composition ~">
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.DPS.icon} /> DPS: {roster.combined.filter(m => m.main?.role?.name === "DPS").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Tank.icon} /> Tanks: {roster.combined.filter(m => m.main?.role?.name === "Tank").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Healer.icon} /> Healers: {roster.combined.filter(m => m.main?.role?.name === "Healer").length}</div>
        </Card>

        <ClassCompWidget />
      </aside>
    </div>
  </Page>
}
