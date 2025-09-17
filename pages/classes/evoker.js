import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Evoker } from '../../data/classes/evoker'

const guides = {
  devastation: [],
  preservation: [],
  augmentation: [],
}

// const guides = {
//   havoc: [
//     { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide' },
//     { name: 'Noxxic', url: 'https://www.noxxic.com/wow/havoc-demon-hunter/' }
//   ],
//   vengeance: [
//     { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-guide' },
//     { name: 'Noxxic', url: 'https://www.noxxic.com/wow/vengeance-demon-hunter/' }
//   ]
// }

const DISCORD = ''

export default function ClassEvoker() {
  return (
    <Page
      title='Evoker'
      class={Evoker}
      discord={DISCORD}
      guides={guides}
      specs={[
        { name: 'Devastation', key: 'devastation' },
        { name: 'Augmentation', key: 'augmentation' },
        { name: 'Preservation', key: 'preservation' },
      ]}
    >
    </Page>
  )
}
