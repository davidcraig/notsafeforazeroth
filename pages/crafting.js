import React from 'react'
import Page from '../Components/Page'
import wwCrafting from '../data/warwithin/crafting'
import slCrafting from '../data/shadowlands/crafting'
import { TabbedContent } from '../Components/TabbedContent'
import TabbedContentWithKey from '../Components/TabbedContentWithKey'
import WoWProfessionSkillBar from '../Components/WoWProfessionSkillBar'

// HoC
const TabWithKey = TabbedContentWithKey(TabbedContent)

const nonCraftingKeys = ["skinning", "mining", "herbalism"]


function getCrafterSkillMap(expansionData) {
  const crafterMap = {}

  Object.values(expansionData).forEach(profession => {
    profession.crafters?.forEach(crafter => {
      const name = crafter.name
      if (!crafterMap[name]) {
        crafterMap[name] = {
          class: crafter.class,
          skills: []
        }
      }

      crafterMap[name].skills.push({
        profession: profession.name,
        skill: crafter.skill?.current ?? 0,
        cap: crafter.skill?.cap ?? 100
      })
    })
  })

  return crafterMap
}

function RenderCrafterSkillGrid(expansionData) {
  const crafterMap = getCrafterSkillMap(expansionData)

  return (
    <div className="crafter-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      {Object.entries(crafterMap).map(([name, { class: crafterClass, skills }]) => (
        <div key={name} style={{
          padding: '0.75rem',
          border: '1px solid rgba(0,0,0,0.4)',
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }} className={`fg-${crafterClass.css}`}>
            {name}
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {skills.map((skillData, idx) => (
              <WoWProfessionSkillBar
                key={idx}
                skill={skillData.skill}
                cap={skillData.cap}
                label={skillData.profession}
                color={crafterClass.css}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function RenderCraftersItemsTable(profession) {
  if (!profession.crafters) return null

  return <>
    {profession.crafters.map(crafter => {
      if (!crafter.items) { return }
      return (
        <table className='table is-narrow is-striped mt-4'>
          <thead>
            <tr>
              <th>Crafter</th>
              <th>Item</th>
              <th>Type</th>
              <th>Materials</th>
            </tr>
          </thead>
          <tbody>
            {crafter.items.map((item, idx) => {
              return <tr key={item.name+crafter.name}>
                <td className={`fg-${crafter.class.css}`}>{idx == 0 && crafter.name}</td>
                <td><a className={`fg-${item.rarity}`} href={item.url}>{item.name}</a></td>
                <td>{item.type}</td>
                <td>
                  <div className='flex'>
                  {
                    item.materials.map(mat => {
                      return (
                        <div className='mr-4' key={mat.name}>
                        { mat.url ? <a href={mat.url} className={`fg-${mat.rarity || 'common'}`}>{mat.name}</a> : mat.name } x{mat.quantity}
                        </div>
                      )
                    })
                  }
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )
    })}
  </>
}

function RenderExpansionCrafting(expansionData, professionKey) {
  if (!expansionData || !professionKey || !expansionData.hasOwnProperty(professionKey)) {
    return ''
  }
  let profession = expansionData[professionKey]
  if (!profession || !profession.crafters) {
    return ''
  }

  return (
    <>
      <p>Crafters Items</p>
      {RenderCraftersItemsTable(profession)}
    </>
  )

}

const GetExpansionTabs = (expansionCraftingData) => {
  const keys = Object.keys(expansionCraftingData)

  return keys.filter(key => !nonCraftingKeys.includes(key)).map(key => ({
      title: expansionCraftingData[key]?.name || key,
      content: RenderExpansionCrafting(expansionCraftingData, key)
    }
  ))
}

function RenderExpansion(expansionTitle, expansionCraftingData, idSlug) {
  const tabs = GetExpansionTabs(expansionCraftingData);

  return (
    <div className='mt-8'>
      <h1 className='mb-4' style={{ fontWeight: 'bold' }}>{expansionTitle}</h1>

      {RenderCrafterSkillGrid(expansionCraftingData)}
      <TabWithKey id={`${idSlug}-crafting`} content={tabs} />
    </div>
  )
}


export default function Crafting() {
  const expansions = [
    { name: 'The War Within', crafts: wwCrafting, slug: 'tww' },
    { name: 'Shadowlands', crafts: slCrafting, slug: 'sl' },
  ]

  const tabs = expansions.map(ex => ({
    title: ex.name,
    content: RenderExpansion(ex.name, ex.crafts, ex.slug)
  }))
  
  return <Page title='Crafting'>
    <h1 className='h1'>Crafting</h1>

    <TabWithKey id="crafting-tabs" content={tabs} />
  </Page>
}
