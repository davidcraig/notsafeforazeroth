import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Shaman } from '../../data/classes/shaman'

const guides = {
  restoration: [],
  enhancement: [],
  elemental: [],
}

const DISCORD = ['https://discord.gg/0VcupJEQX0HuE5HH', 'https://discord.gg/AcTek6e']

export default function ClassShaman() {
  const props = {
    title: 'Shaman',
    class: Shaman,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Restoration', key: 'restoration' },
      { name: 'Enhancement', key: 'enhancement' },
      { name: 'Elemental', key: 'elemental' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
