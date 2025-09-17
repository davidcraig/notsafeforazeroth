import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Paladin } from '../../data/classes/paladin'

export default function ClassPaladin() {
  const props = {
    title: 'Paladin',
    class: Paladin,
  }

  return (
    <Page { ...props }></Page>
  )
}
