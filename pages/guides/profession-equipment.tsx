import React from 'react'
import Page from '../../Components/Page.js'
import TabbedContent from "@nsfa/Components/TabbedContent.tsx"
import TabbedContentWithKey from "@nsfa/Components/TabbedContentWithKey.js"
import TWW_LW from "@nsfa/data/warwithin/crafting/leatherworking"

const TabWithKey = TabbedContentWithKey(TabbedContent)

const expansions = [
  { name: 'The War Within', slug: 'tww', id: 11 },
  ///{ name: 'Dragonflight', slug: 'df', id: 10 }, - Lets hide DF for now
  // Profession Equip didn't exist in this form before that.
]

function TWWContent() {
  const professions = [
    {
      name: "Skinning",
      basicItems: [
        { ...TWW_LW.HideseekersPack, craftedByProfession: 'Leatherworking' },
        { ...TWW_LW.HideseekersHat, craftedByProfession: 'Leatherworking' },
      ]
    },
    {
      name: "Leatherworking",
      basicItems: [
        { name: "Proficient Leatherworker's Toolset" },
        { ...TWW_LW.HideshapersCover, craftedByProfession: 'Leatherworking' }
      ]
    }
  ]

  return (
    <>
      {professions.map(profession => {
        return <div className='mt-4'>
          <h2 className='text-xl mb-4 fg-artifact'>{profession.name}</h2>
          <p className=''>Basic Equipment</p>
          <ul className='my-2 flex gap-4'>
            {profession.basicItems?.map(item => {
              return <li key={item.url}><a className={`fg-${item.rarity}`} href={item.url}>{item.name}</a> ({item.craftedByProfession ?? "Source Unknown"})</li>
            })}
          </ul>
        </div>
      })}
    </>
  )
}


function RenderExpansionContent(expansion) {
  if (expansion.id == 11) {
    return TWWContent()
  }
  return null
}

export default function ProfessionEquipment() {
  const tabs = []

  expansions.forEach(ex => {
    tabs.push({
      title: ex.name,
      content: RenderExpansionContent(ex)
    })
  })

  return (
    <Page>
      <h1 className='text-xl mb-4'>Profession Equipment</h1>

      <TabWithKey id='profession-equipment' content={tabs} />
    </Page>
  )
}
