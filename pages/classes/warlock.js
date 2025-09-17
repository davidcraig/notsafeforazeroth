import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Warlock } from '../../data/classes/warlock'

const guides = {
  affliction: [],
  destruction: [],
  demonology: [],
}

const DISCORD = 'https://discord.gg/0onXDymd9Wpc2CEu'

export default function ClassWarlock() {
  const props = {
    title: 'Warlock',
    class: Warlock,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Affliction', key: 'affliction' },
      { name: 'Destruction', key: 'destruction' },
      { name: 'Demonology', key: 'demonology' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
