import React from 'react'
import WoWClassPage from '../../Components/WoWClassPage'
import { DeathKnight } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/acherus'

const specs = [
  {
    name: 'Unholy',
    key: 'unholy',
    guides: [
      { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide' },
      { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/unholy-death-knight/' },
      { name: 'Method', url: 'https://www.method.gg/guides/unholy-death-knight' }
    ]
  },
  {
    name: 'Frost',
    key: 'frost',
    guides: [
      { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide' },
      { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/frost-death-knight/' }
    ]
  },
  {
    name: 'Blood',
    key: 'blood',
    img: '/img/wow/classes/spell_deathknight_bloodpresence.jpg',
    guides: [
      { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide' },
      { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/blood-death-knight/' },
    ]
  },
]

export default function ClassDeathKnight() {
  return (
    <WoWClassPage
      title='Death Knight'
      class={DeathKnight}
      discord={DISCORD}
      specs={specs}
    >
    </WoWClassPage>
  )
}
