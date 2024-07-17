import React from 'react'
import TabbedContent from '../Components/TabbedContent'
import Timeline from '../Components/Timeline'
import PageWithWidgets from '../Components/PageWithWidgets'

import raids from '../data/warwithin/raids'

// const NathriaProgression = [
//   {
//     date: '1 Jan',
//     content: 'Shriekwing [N]'
//   },
//   {
//     date: '6 Jan',
//     content: (
//       <>
//         <span>Huntsman Altimore [N]</span><br/>
//         <span>Hungering Destroyer [N]</span>
//       </>
//     )
//   },
//   {
//     date: '8 Jan',
//     content: "Artificer Xy'mox [N]"
//   },
//   {
//     date: '13 Jan',
//     content: "Lady Innerva Darkvein [N]"
//   },
//   {
//     date: '15 Jan',
//     content: "Sun King's Salvation [N]"
//   }
// ]

export default function WarWithin() {
  return <PageWithWidgets title='War Within'>
    <h1 className='h1 text-xl mb-4'>War Within 11.0+</h1>

    <h2 className='h2 text-lg'>Raids</h2>
    {Object.keys(raids).map(index => {
      let raid = raids[index];
      return <div key={`raid-${index}`}>
        {raid.name} - Bosses: {raid.progression.length}
      </div>
    })}
    {/* <TabbedContent
      content={
        [
          {
            title: 'Castle Nathria',
            content: (
              <>
                <Timeline
                  entries={NathriaProgression}
                />
              </>
            )
          }
        ]
      }
    /> */}
  </PageWithWidgets>
}
