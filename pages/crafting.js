import React from 'react'
import Page from '../Components/Page'
import wwCrafting from '../data/warwithin/crafting'
import { TabbedContent } from '../Components/TabbedContent'

function RenderExpansionCrafting(expansionData, professionKey) {
  if (!expansionData || !professionKey || !expansionData.hasOwnProperty(professionKey)) {
    return ''
  }
  let profession = expansionData[professionKey]
  console.log(profession, "profession")
  if (!profession || !profession.crafters) {
    return ''
  }

  return <table className='table is-narrow is-striped mt-4'>
    <thead>
      <tr>
        <th>Crafter</th>
        <th>Item</th>
        <th>Materials</th>
      </tr>
    </thead>
    <tbody>
      {

        profession.crafters.map(crafter => {
          return crafter.items.map(item => {
            return <tr key={item.name+crafter.name}>
              <td className={`fg-${crafter.class.css}`}>{crafter.name}</td>
              <td><a className={`fg-${item.rarity}`} href={item.url}>{item.name}</a></td>
              <td>
                <div className='flex'>
                {
                  item.materials.map(mat => {
                    return (
                      <>
                      { mat.url ? <a href={mat.url}>{mat.name}</a> : mat.name } x{mat.quantity}
                      </>
                    )
                  })
                }
                </div>
              </td>
            </tr>
          })
        })
      }
    </tbody>
  </table>
}

function RenderWarWithin() {
  return <TabbedContent content={[
    { title: 'Blacksmithing', content: RenderExpansionCrafting(wwCrafting, 'blacksmithing') },
  ]} />
}

export default function Crafting() {
  const tabs = [
    // { title: 'Shadowlands', content: RenderShadowlands() },
    { title: 'War Within', content: RenderWarWithin() },
  ]
  
  return <Page title='Crafting'>
    <h1 className='h1'>Crafting</h1>

    <TabbedContent content={tabs} />
  </Page>
}
