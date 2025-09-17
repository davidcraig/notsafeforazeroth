import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Druid } from '../../data/classes/druid'

const guides = {
  restoration: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/restoration-druid/' },
    { name: 'Method', url: 'https://www.method.gg/guides/restoration-druid' },
  ],
  balance: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/balance-druid-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/balance-druid/' },
    { name: 'Method', url: 'https://www.method.gg/guides/balance-druid' },
  ],
  feral: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/feral-druid-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/feral-druid/' }
  ],
  guardian: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/guardian-druid/' }
  ],
}

const DISCORD = 'https://discord.gg/0dWu0WkuetF87H9H'

export default function ClassDruid() {
  return (
    <Page
      title='Druid'
      class={Druid}
      discord={DISCORD}
      guides={guides}
      specs={[
        { name: 'Guardian', key: 'guardian' },
        { name: 'Restoration', key: 'restoration' },
        { name: 'Balance', key: 'balance' },
        { name: 'Feral', key: 'feral' },
      ]}
    >
    </Page>
  )
}
