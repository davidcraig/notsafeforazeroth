import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Mage } from '../../data/classes/mage'

const guides = {
  arcane: [],
  fire: [],
  frost: [],
}

const DISCORD = 'https://discord.gg/WzYCnbg'

export default function ClassMage() {
  const props = {
    title: 'Mage',
    class: Mage,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Arcane', key: 'arcane' },
      { name: 'Fire', key: 'fire' },
      { name: 'Frost', key: 'frost' },
    ]
  }

  return (
    <Page { ...props } />
  )
}
