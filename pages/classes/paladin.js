import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Paladin } from '../../data/classes/paladin'

const guides = {
  holy: [],
  protection: [],
  retribution: [],
}

const DISCORD = 'https://discord.gg/hammerofwrath'

export default function ClassPaladin() {
  const props = {
    title: 'Paladin',
    class: Paladin,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Holy', key: 'holy' },
      { name: 'Protection', key: 'protection' },
      { name: 'Retribution', key: 'retribution' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
