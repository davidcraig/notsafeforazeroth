import React from 'react'
import TabbedContent from '@nsfa/Components/TabbedContent.tsx'
import Timeline from '../Components/Timeline'
import PageWithWidgets from '../Components/PageWithWidgets'
import GetRaidProgression from '../Functions/WoW/GetRaidProgression'

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
  const progressClass = (progression, total) => {
    if (progression == 0) { return 'alive' }
    if (progression == total) { return 'killed' }
    return 'progress'
  }

  return <PageWithWidgets title='War Within'>
    <h1 className='h1 text-xl mb-4'>War Within 11.0+</h1>

    <h2 className='h2 text-lg'>Raids</h2>
    <table>
      <thead>
        <tr>
          <th className='px-2'>Raid</th>
          <th className='px-2'>Bosses</th>
          <th className='px-2'>Normal</th>
          <th className='px-2'>Heroic</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(raids).map(index => {
          let raid = raids[index];
          let progression = GetRaidProgression(raid);
          const normalClass = progressClass(progression.normal, raid.progression.length);
          const heroicClass = progressClass(progression.heroic, raid.progression.length);

          return <tr key={`raid-${index}`}>
            <td className='px-2'>{raid.name}</td>
            <td className='px-2'>{raid.progression.length}</td>
            <td className={`px-2 ${normalClass}`}>{progression.normal} / {raid.progression.length}</td>
            <td className={`px-2 ${heroicClass}`}>{progression.heroic} / {raid.progression.length}</td>
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
