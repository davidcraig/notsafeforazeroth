import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Rogue } from '../../data/classes/rogue'

const DISCORD = 'https://discord.gg/0h08tydxoNhfDVZf'

const guides = {
  assassination: [],
  subtlety: [],
  outlaw: [],
}

export default function ClassRogue() {
  const props = {
    title: 'Rogue',
    class: Rogue,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Outlaw', key: 'outlaw' },
      { name: 'Subtlety', key: 'subtlety' },
      { name: 'Assassination', key: 'assassination' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
