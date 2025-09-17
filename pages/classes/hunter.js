import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Hunter } from '../../data/classes/hunter'

const guides = {
  beastmaster: [],
  survival: [],
  marksmanship: [],
}

const DISCORD = ['https://discord.gg/yqer4BX', 'https://discord.gg/G3tYdTG']

export default function ClassHunter() {
  return (
    <Page
      title='Hunter'
      class={Hunter}
      discord={DISCORD}
      guides={guides}
      specs={[
        { name: 'Beast Master', key: 'beastmaster' },
        { name: 'Survival', key: 'survival' },
        { name: 'Marksmanship', key: 'marksmanship' },
      ]}
    >
    </Page>
  )
}
