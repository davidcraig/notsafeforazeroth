import React from 'react'
import Page from '../Components/Page'
import WoWProfessionSkillBar from '../Components/WoWProfessionSkillBar'
import { buildExpansionCraftingData } from '../data/crafting'

function RenderProfessionTables(expansionSlug: string) {
  const data = buildExpansionCraftingData(expansionSlug) as any
  const profKeys = Object.keys(data)
  if (profKeys.length === 0) return null

  const sorted = profKeys.sort((a, b) => (data[a]?.name || a).localeCompare(data[b]?.name || b))

  return (
    <div>
      {sorted.map((key: string) => {
        const profession = data[key]
        if (!profession?.crafters || profession.crafters.length === 0) return null

        return (
          <div key={key} className='mt-6'>
            <h4 className='font-bold text-lg mb-2'>{profession.name}</h4>
            <table className='table is-narrow is-striped'>
              <thead>
                <tr>
                  <th>Character</th>
                  <th>Realm</th>
                  <th>Skill</th>
                </tr>
              </thead>
              <tbody>
                {profession.crafters.map((c: any) => (
                  <tr key={`${c.name}-${c.realm}`}>
                    <td className={`fg-${c?.wowclass?.css || c?.wowclass?.wowclass?.css}`}>{c.name}</td>
                    <td>{c.realm}</td>
                    <td style={{ minWidth: 220 }}>
                      <WoWProfessionSkillBar
                        skill={c?.skill?.current || 0}
                        cap={c?.skill?.cap || 100}
                        label={`${c?.skill?.current || 0}/${c?.skill?.cap || 100}`}
                        color={c?.wowclass?.css || ''}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default function Professions() {
  const expansions = [
    { name: 'The War Within', slug: 'tww', id: 11 },
    { name: 'Dragonflight', slug: 'df', id: 10 },
    { name: 'Shadowlands', slug: 'sl', id: 9 },
    { name: 'Battle for Azeroth', slug: 'bfa', id: 8 },
    { name: 'Legion', slug: 'legion', id: 7 },
    { name: 'Warlords of Draenor', slug: 'wod', id: 6 },
    { name: 'Mists of Pandaria', slug: 'mop', id: 5 },
    { name: 'Cataclysm', slug: 'cata', id: 4 },
    { name: 'Wrath of the Lich King', slug: 'wrath', id: 3 },
    { name: 'The Burning Crusade', slug: 'tbc', id: 2 },
    { name: 'World of Warcraft', slug: 'wow', id: 1 },
  ]

  return <Page title='Professions'>
    <h2 className='h2 text-2xl mb-2'>Guild Professions</h2>
    {expansions.map(ex => (
      <div key={ex.slug} className='mt-8'>
        <h3 className='mb-4 text-xl' style={{ fontWeight: 'bold' }}>{ex.name}</h3>
        {RenderProfessionTables(ex.slug)}
      </div>
    ))}
  </Page>
}


