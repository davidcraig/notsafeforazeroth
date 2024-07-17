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
    <table>
      <thead>
        <tr>
          <th className='px-2'>Raid</th>
          <th className='px-2'>Bosses</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(raids).map(index => {
          let raid = raids[index];
          return <tr key={`raid-${index}`}>
            <td className='px-2'>{raid.name}</td>
            <td className='px-2'>{raid.progression.length}</td>
          </tr>
        })}
      </tbody>
    </table>
    
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
