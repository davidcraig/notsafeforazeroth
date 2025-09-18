import React from 'react'
import Page from '../Components/Page'
import { TabbedContent } from '../Components/TabbedContent'
import TabbedContentWithKey from '../Components/TabbedContentWithKey'
import WoWProfessionSkillBar from '../Components/WoWProfessionSkillBar'
import { buildExpansionCraftingData } from '../data/crafting'
import { Character } from '../Types/Character'
import type { CharacterProfessions } from '../Types/Character'

// HoC
const TabWithKey = TabbedContentWithKey(TabbedContent)

const nonCraftingKeys = ["skinning", "mining", "herbalism", "cooking"]

// skill cap and builder logic moved to data/crafting

function getCrafterSkillMap(expansionData) {
  const crafterMap = {}

  if (Object.keys(expansionData).length == 0) {
    return null
  }
  console.log(expansionData, 'expansionData')

  Object.values(expansionData).forEach((profession: any) => {
    profession?.crafters?.forEach(crafter => {
      const name = `${crafter.name}-${crafter.realm}`
      if (!crafterMap[name]) {
        crafterMap[name] = {
          wowclass: crafter.wowclass,
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
  if (!crafterMap || crafterMap == null) {
    return null
  }

  return (
    <div className="crafter-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      {Object.entries(crafterMap).map(([name, { wowclass, skills }]: any) => (
        <div key={name} style={{
          padding: '0.75rem',
          border: '1px solid rgba(0,0,0,0.4)',
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }} className={`fg-${wowclass?.css || wowclass?.wowclass?.css}`}>
            {name}
          </div>

          <div style={{
            display: 'flex',
            gap: '0 1rem',
            flexWrap: 'wrap'
          }}>
            {skills.map((skillData, idx) => (
              <WoWProfessionSkillBar
                key={idx}
                skill={skillData.skill}
                cap={skillData.cap}
                label={skillData.profession}
                color={wowclass?.css || ""}
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
      if (!crafter.items) { return null }
      return (
        <div key={crafter.name} className='mt-8'>
          <h1 className={`fg-${crafter?.wowclass?.css || crafter.class?.css || ""} font-bold text-xl`}>{crafter.name}</h1>

          <RenderCraftsAsGrid crafter={crafter} />
        </div>
      )
    })}
  </>
}

function RenderCraftsAsGrid({ crafter }) {
  if (!crafter.items) return null

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4'>
      {crafter.items.map((item, idx) => {
          return <div
            key={item.name+crafter.name}
            className='flex flex-col card'
            style={{
              padding: '0 .8rem .4rem .8rem',
              boxShadow: '0 0 2px #000'
            }}
          >
            <a className={`fg-${item.rarity} font-bold`} href={item.url} rel="noopener noreferrer" target='_blank'>{item.name}</a>
            {item.type}
            
            <div className='flex flex-col mt-4'>
            {
              item.materials.map(mat => {
                return (
                  <div className='mb-2' key={mat.name}>
                    { mat.url ? <a href={mat.url} rel='noopener noreferrer' target='_blank' className={`fg-${mat.rarity || 'common'}`}>{mat.name}</a> : mat.name } x {mat.quantity}
                  </div>
                )
              })
            }
            </div>
          </div>
        })}
    </div>
  )
}

function RenderCraftsAsTable(crafter) {
  return (
    <table className='table is-narrow is-striped mt-4'>
      <thead>
        <tr>
          <th>Item</th>
          <th>Type</th>
          <th>Materials</th>
        </tr>
      </thead>
      <tbody>
        {crafter.items.map((item, idx) => {
          return <tr key={item.name+crafter.name}>
            <td><a className={`fg-${item.rarity}`} href={item.url} rel="noopener noreferrer" target='_blank'>{item.name}</a></td>
            <td>{item.type}</td>
            <td>
              <div className='flex'>
              {
                item.materials.map(mat => {
                  return (
                    <div className='mr-4' key={mat.name}>
                    { mat.url ? <a href={mat.url} rel='noopener noreferrer' target='_blank' className={`fg-${mat.rarity || 'common'}`}>{mat.name}</a> : mat.name } x {mat.quantity}
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
}

function RenderExpansionCrafting(expansionData, professionKey) {
  if (!expansionData || !professionKey || !expansionData.hasOwnProperty(professionKey)) {
    return null
  }
  let profession = expansionData[professionKey]
  if (!profession || !profession.crafters) {
    return null
  }

  return RenderCraftersItemsTable(profession)
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
      <h1 className='mb-4 text-xl' style={{ fontWeight: 'bold' }}>{expansionTitle}</h1>

      {RenderCrafterSkillGrid(expansionCraftingData)}
      <TabWithKey id={`${idSlug}-crafting`} content={tabs} />
    </div>
  )
}


export default function Crafting() {
  const expansions = [
    { name: 'The War Within', crafts: buildExpansionCraftingData('tww'), slug: 'tww' },
    { name: 'DF', crafts: buildExpansionCraftingData('df'), slug: 'df' },
    { name: 'SL', crafts: buildExpansionCraftingData('sl'), slug: 'sl' },
    { name: 'BFA', crafts: buildExpansionCraftingData('bfa'), slug: 'bfa' },
    { name: 'Legion', crafts: buildExpansionCraftingData('legion'), slug: 'legion' },
    { name: 'WoD', crafts: buildExpansionCraftingData('wod'), slug: 'wod' },
    { name: 'MoP', crafts: buildExpansionCraftingData('mop'), slug: 'mop' },
    { name: 'Cata', crafts: buildExpansionCraftingData('cata'), slug: 'cata' },
    { name: 'Wrath', crafts: buildExpansionCraftingData('wrath'), slug: 'wrath' },
    { name: 'tBC', crafts: buildExpansionCraftingData('tbc'), slug: 'tbc' },
    { name: 'WoW', crafts: buildExpansionCraftingData('wow'), slug: 'wow' },
  ]

  const tabs = expansions.map(ex => ({
    title: ex.name,
    content: RenderExpansion(ex.name, ex.crafts, ex.slug)
  }))
  
  return <Page title='Crafting'>
    <h2 className='h2 text-2xl mb-2'>Guild Crafting</h2>

    <TabWithKey id="crafting-tabs" content={tabs} />
  </Page>
}
