import React from 'react'
import Page from '../Components/Page'
import type { Character } from '../Types/Character'

// Tarren Mill
import Sniperdrood from '../data/characters/TarrenMill/Sniperdrood'
import Snipedeath from '../data/characters/TarrenMill/Snipedeath'
import Crássiúss from '../data/characters/TarrenMill/Crássiúss'
import Snipermagi from '../data/characters/TarrenMill/Snipermagi'
import Whoorelips from '../data/characters/TarrenMill/Whoorelips'
import Snipérmonk from '../data/characters/TarrenMill/Snipérmonk'
import Aronin from '../data/characters/TarrenMill/Aronin'

// Draenor

// Silvermoon
import Sniperwar from '../data/characters/Silvermoon/Sniperwar'

// Magtheridon
import Snipá from '../data/characters/Magtheridon/Snipá'

import { Realms } from '../data/Enum/Realms'

const RANKS = {
  Officer: 'Officer',
  Enforcer: 'Enforcer',
  Member: 'Member'
}

let characters = {}

const addCharacter = (character: Character) => {
  characters[character.name] = { name: character.name, class: character.wowclass, role: character.role, realm: character.realm }
}

// Chris
// addCharacter('Violatór', wowClasses.Rogue, ROLES.DPS, realms.TarrenMill);
// addCharacter('Aronin', wowClasses.Paladin, ROLES.Tank, realms.TarrenMill)
// // Sniper
// addCharacter('Snipevoke', wowClasses.Evoker, ROLES.DPS, realms.TarrenMill);
// addCharacter('Sniperdrood', wowClasses.Druid, ROLES.DPS, realms.TarrenMill);
// addCharacter('Snipedeath', wowClasses.DeathKnight, ROLES.Tank, realms.TarrenMill);
// // Rob
// addCharacter('Whoorelips', wowClasses.Hunter, ROLES.DPS, realms.TarrenMill);
// // Gary
// addCharacter('Palabellum', wowClasses.Paladin, ROLES.DPS, realms.TarrenMill);
// addCharacter('Hoarfróst', wowClasses.DeathKnight, ROLES.DPS, realms.TarrenMill);
// // Tom
// addCharacter('Demonbanger', wowClasses.Warlock, ROLES.DPS, realms.TarrenMill);
// addCharacter('Skiradan', wowClasses.DemonHunter, ROLES.DPS, realms.TarrenMill);
// // Crassius
// addCharacter('Crássiúss', wowClasses.Hunter, ROLES.DPS, realms.Kazzak);
// addCharacter('Twiggss', wowClasses.Mage, ROLES.DPS, realms.Kazzak);

const roster = {
  officers: [
    {
      real: 'Chris',
      rank: RANKS.Officer,
      main: Aronin,
    },
    {
      real: 'Dave / Sniper',
      rank: RANKS.Officer,
      main: Sniperdrood,
      alts: [
        // TM
        Snipedeath,
        Snipermagi,
        Snipérmonk,
        // SM
        Sniperwar,
        // Mag
        Snipá
      ]
    },
    {
      real: 'Rob',
      rank: RANKS.Officer,
      main: Whoorelips
    },
    {
      real: 'Gary',
      rank: RANKS.Officer,
      // main: characters.Palabellum,
      // alts: [ characters.Hoarfróst ]
    },
    {
      real: 'Tom',
      rank: RANKS.Officer,
      // main: characters.Skiradan,
      // alts: [ characters.Demonbanger ]
    },
  ],
  enforcers: [],
  members: [
  ],
  combined: [],
}

const addMember = (character, alts) => {
  let obj = {
    rank: RANKS.Member,
    main: character,
    alts: null
  }

  if (alts) {
    obj.alts = alts
  }

  roster.members.push(obj)
}

addMember(Crássiúss, []);

roster.combined = [...roster.officers, ...roster.enforcers, ...roster.members]

const getCardTitle = (m) => {
  if (!m.main) return
  let fragment = (
    <>
      {m.main && m.main?.role?.length > 0 && (
        <>
          {m.main.role.map(role => {
            return <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={role.icon} />
          })}
        </>
      )}
      <a target="_blank" rel='noopener noreferrer' className={`fg-${m.main.wowclass.css}`} href={getArmoryLink(m.main)}>{m.main?.name}</a>{m.real && ` (${m.real})`}
    </>
  )

  return fragment
}

const getArmoryLink = (character: Character) => {
  if (!character) return null
  if (!character.realm) return null

  let realm: string = character.realm;
  if (character.realm == Realms.TarrenMill) { realm = "tarren-mill" }

  return `https://worldofwarcraft.blizzard.com/en-gb/character/eu/${realm}/${character.name}`
}

const renderAlt = (alt) => {
  const link = getArmoryLink(alt)
  console.log(link, 'link')

  if (!link) {
    return <>
      {alt?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={alt.role?.icon} />
      )}
      <span className={`fg-${alt.wowclass.css} mr-4`}>{alt.name}</span>
  </>
  }

  return <>
      {alt?.role && (
        <img width={24} height={24} style={{display: 'inline-block', marginRight: '.25rem'}} src={alt.role?.icon} />
      )}
      <a target="_blank" rel='noopener noreferrer' className={`fg-${alt.wowclass.css} mr-4`} href={link}>{alt.name}</a>
  </>
}

// const ClassCompWidget = () => {
//   let data = []

//   Object.keys(wowClasses).forEach(cl => {
//     const wClass = wowClasses[cl]
//     data.push({
//       key: cl,
//       name: wClass.name,
//       count: roster.combined.filter(m => m.main?.wowclass?.name === wClass.name).length,
//       css: `fg-${wClass.css}-important`
//     })
//   })

//   return (
//     <>
//       <Card title="Class Composition ~">
//         <table>
//           <tbody>
//             {
//               data.map(wowClass => {
//                 return <tr key={wowClass.key}>
//                   <td className={wowClass.css}>{wowClass.name}</td>
//                   <td className={wowClass.css}>{wowClass.count}</td>
//                 </tr>
//               })
//             }
//           </tbody>
//         </table>
//       </Card>
//     </>
//   )
// }

const RosterAsTable = ({ className }) => {
  return (
    <table className={`table is-striped ${className}`}>
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
        {/* <Card title="Role Composition ~">
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.DPS.icon} /> DPS: {roster.combined.filter(m => m.main?.role?.name === "DPS").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Tank.icon} /> Tanks: {roster.combined.filter(m => m.main?.role?.name === "Tank").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Healer.icon} /> Healers: {roster.combined.filter(m => m.main?.role?.name === "Healer").length}</div>
        </Card> */}

        {/* <ClassCompWidget /> */}
      </aside>
    </div>
  </Page>
}
