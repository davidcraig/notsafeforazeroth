import React from 'react'
import Page from '../Components/Page'
import WoWProfessionSkillBar from '../Components/WoWProfessionSkillBar'
import { buildCharacterSkillsByExpansion } from '../data/crafting'

function RenderCharacterProfessionTable(ex: { name: string, slug: string }, filterText: string) {
  const byCharacter = buildCharacterSkillsByExpansion(ex.slug) as any
  const rows: any[] = []

  Object.values(byCharacter).forEach((entry: any) => {
    const { character, skills } = entry
    skills.forEach((s: any) => {
      rows.push({
        key: `${character.name}-${character.realm}-${s.professionKey}`,
        character,
        professionName: s.professionName,
        current: s.current,
        cap: s.cap,
      })
    })
  })

  if (rows.length === 0) return null

  // Sort rows by character name, then profession name
  rows.sort((a, b) => {
    const nc = a.character.name.localeCompare(b.character.name)
    if (nc !== 0) return nc
    return a.professionName.localeCompare(b.professionName)
  })

  const normalized = (filterText || '').trim().toLowerCase()
  const filteredRows = normalized
    ? rows.filter(r =>
        r.character.name.toLowerCase().includes(normalized) ||
        String(r.character.realm).toLowerCase().includes(normalized) ||
        r.professionName.toLowerCase().includes(normalized)
      )
    : rows



  return (
    <div key={ex.slug} className='mt-8'>
      <h3 className='mb-4 text-xl' style={{ fontWeight: 'bold' }}>{ex.id}. {ex.name}</h3>
      <table className='table is-narrow is-striped border' style={{ borderColor: 'var(--theme-bg-2)' }}>
        <thead>
          <tr className='border' style={{ borderColor: 'var(--theme-bg-2)' }}>
            <th>Character</th>
            <th>Realm</th>
            <th>Profession</th>
            <th>Skill</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(row => (
            <tr key={row.key}>
              <td className={`fg-${row.character?.wowclass?.css || row.character?.wowclass?.wowclass?.css}`}>{row.character.name}</td>
              <td>{row.character.realm}</td>
              <td>{row.professionName}</td>
              <td style={{ minWidth: 220 }}>
                <WoWProfessionSkillBar
                  skill={row.current || 0}
                  cap={row.cap || 100}
                  label={null}
                  color={row.character?.wowclass?.css || ''}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

  const [filterText, setFilterText] = React.useState('')

  return <Page title='Professions'>
    <h2 className='h2 text-2xl mb-2'>Guild Professions</h2>
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Filter by character, realm, or profession'
        className='input'
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ maxWidth: 420 }}
      />
    </div>
    {expansions.map(ex => (
      RenderCharacterProfessionTable(ex, filterText)
    ))}
  </Page>
}


