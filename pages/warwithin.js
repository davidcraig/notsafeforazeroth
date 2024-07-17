import React from 'react'
import TabbedContent from '../Components/TabbedContent'
import Timeline from '../Components/Timeline'
import PageWithWidgets from '../Components/PageWithWidgets'

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
    <h1 className='h1 text-xl'>War Within 11.0+</h1>
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
