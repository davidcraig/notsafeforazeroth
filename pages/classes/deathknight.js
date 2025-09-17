import React from 'react'
import WoWClassPage from '../../Components/WoWClassPage'
import { DeathKnight } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/acherus'

const guides = {
  blood: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/blood-death-knight/' },
  ],
  unholy: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/unholy-death-knight/' },
    { name: 'Method', url: 'https://www.method.gg/guides/unholy-death-knight' }
  ],
  frost: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/frost-death-knight/' }
  ],
}

export default function ClassDeathKnight() {
  return (
    <WoWClassPage
      title='Death Knight'
      class={DeathKnight}
      discord={DISCORD}
      guides={guides}
      specs={[
        { name: 'Unholy', key: 'unholy' },
        { name: 'Frost', key: 'frost' },
        { name: 'Blood', key: 'blood' },
      ]}
    >
    </WoWClassPage>
  )
}
