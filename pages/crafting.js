import React from 'react'
import Page from '../Components/Page'
import wwCrafting from '../data/warwithin/crafting'
import slCrafting from '../data/shadowlands/crafting'
import { TabbedContent } from '../Components/TabbedContent'
import TabbedContentWithKey from '../Components/TabbedContentWithKey'

const TabWithKey = TabbedContentWithKey(TabbedContent)

function RenderCraftersTable(profession) {
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

  return RenderCraftersTable(profession)
}

function RenderShadowlands() {
  const tabs = [
    { title: 'Tailoring', content: RenderExpansionCrafting(slCrafting, 'tailor') },
  ]

  return (
    <div className='mt-4'>
      <h1>Shadowlands</h1>
      <TabWithKey id="sl-crafting" content={tabs} />
    </div>
  )
}

function RenderWarWithin() {
  const tabs = [
    { title: 'Blacksmithing', content: RenderExpansionCrafting(wwCrafting, 'bs') },
    { title: 'Leatherworking', content: RenderExpansionCrafting(wwCrafting, 'lw') },
    { title: 'Engineering', content: RenderExpansionCrafting(wwCrafting, 'eng') },
    { title: 'Tailoring', content: RenderExpansionCrafting(wwCrafting, 'tailor') },
    { title: 'Enchanting', content: RenderExpansionCrafting(wwCrafting, 'ench') },
  ]

  return (
    <div className='mt-4'>
      <h1>The War Within</h1>
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
