import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Warrior } from '../../data/classes/warrior'

export default function ClassWarrior() {
  const props = {
    title: 'Warior',
    class: Warrior,
  }

  return (
    <Page { ...props }></Page>
  )
}
