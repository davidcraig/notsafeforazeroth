import React from 'react'
import Page from '../../Components/WoWClassPage'
import { DemonHunter } from '../../data/wow-classes'

const guides = {
  havoc: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/havoc-demon-hunter/' }
  ],
  vengeance: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/vengeance-demon-hunter/' }
  ]
}

const DISCORD = 'https://discord.gg/zGGkNGC'

export default function ClassDemonHunter() {
  return (
    <Page
      title='Demon Hunter'
      class={DemonHunter}
      discord={DISCORD}
      guides={guides}
      specs={[
        { name: 'Havoc', key: 'havoc' },
        { name: 'Vengeance', key: 'vengeance' },
      ]}
    >
    </Page>
  )
}
