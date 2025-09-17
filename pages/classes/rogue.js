import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Rogue } from '../../data/classes/rogue'

export default function ClassRogue() {
  const props = {
    title: 'Rogue',
    class: Rogue,
  }

  return (
    <Page { ...props }></Page>
  )
}
