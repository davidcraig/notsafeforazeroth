import React from 'react'
import PageWithWidgets from '../Components/PageWithWidgets.js'

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

export default function Progression() {
  return <PageWithWidgets title='Progression'>
    <h1 className='h1'>Progression</h1>
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
