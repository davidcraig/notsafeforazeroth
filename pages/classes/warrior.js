import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Warrior } from '../../data/classes/warrior'

const guides = {
  arms: [],
  fury: [],
  protection: [],
}

const DISCORD = 'https://discord.gg/Skyhold'

export default function ClassWarrior() {
  const props = {
    title: 'Warior',
    class: Warrior,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Arms', key: 'arms' },
      { name: 'Fury', key: 'fury' },
      { name: 'Protection', key: 'protection' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}

