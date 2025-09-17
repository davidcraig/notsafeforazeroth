import React from 'react'
import Page from '../../Components/WoWClassPage'
import { DemonHunter } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/zGGkNGC'

export default function ClassDemonHunter() {
  return (
    <Page
      title='Demon Hunter'
      class={DemonHunter}
      discord={DISCORD}
      specs={[
        {
          name: 'Havoc',
          key: 'havoc',
          guides: [
            { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide' },
            { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/havoc-demon-hunter' },
          ]
        },
        {
          name: 'Vengeance',
          key: 'vengeance',
          guides: [
            { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-guide' },
            { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/vengeance-demon-hunter' },
          ]
        },
      ]}
    >
    </Page>
  )
}
