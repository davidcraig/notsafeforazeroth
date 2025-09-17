import React from 'react'
import Page from '../Components/Page'
import wwCrafting from '../data/warwithin/crafting'
import slCrafting from '../data/shadowlands/crafting'
import { TabbedContent } from '../Components/TabbedContent'
import TabbedContentWithKey from '../Components/TabbedContentWithKey'
import WoWProfessionSkillBar from '../Components/WoWProfessionSkillBar'

// HoC
const TabWithKey = TabbedContentWithKey(TabbedContent)

const warWithinProfessionKeys = Object.keys(wwCrafting)
const shadowlandsProfessionKeys = Object.keys(slCrafting)


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

function RenderSkillBars(profession) {
  if (!profession.crafters) {
    console.warn("No crafters for", profession)
    return null
  }
  console.log(profession)
  if (!profession.crafters.length > 0) return null

  return (
    <div>
      {profession.crafters.map(crafter => {
        return <div>
          {crafter.name} - {profession.name} <WoWProfessionSkillBar skill={crafter.skill?.current ?? 0} cap={crafter.skill?.cap ?? 100} color={crafter["class"].css} />
        </div>
      })}
    </div>
  )
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
      <p>Skill Bars</p>
      {RenderSkillBars(profession)}
      <p>Crafters Items</p>
      {RenderCraftersItemsTable(profession)}
    </>
  )

}

function RenderShadowlands() {
  const tabs = shadowlandsProfessionKeys.map(key => ({
    title: slCrafting[key]?.name || key,
    content: RenderExpansionCrafting(slCrafting, key)
  }))

  return (
    <div className='mt-4'>
      <h1>Shadowlands</h1>

      <p>Skill Bars</p>
      {shadowlandsProfessionKeys.map(key => RenderSkillBars(slCrafting[key]))}

      <TabWithKey id="sl-crafting" content={tabs} />
    </div>
  )
}


function RenderWarWithin() {
  const tabs = warWithinProfessionKeys.map(key => ({
    title: wwCrafting[key]?.name || key,
    content: RenderExpansionCrafting(wwCrafting, key)
  }))

  return (
    <div className='mt-4'>
      <h1>The War Within</h1>

      <p>Skill Bars</p>
      {warWithinProfessionKeys.map(key => RenderSkillBars(wwCrafting[key]))}

      <TabWithKey id="tww-crafting" content={tabs} />
    </div>
  )
}


export default function Crafting() {
  const tabs = [
    { title: 'War Within', content: RenderWarWithin() },
    { title: 'Shadowlands', content: RenderShadowlands() },
  ]
  
  return <Page title='Crafting'>
    <h1 className='h1'>Crafting</h1>

    <TabWithKey id="crafting-tabs" content={tabs} />
  </Page>
}
