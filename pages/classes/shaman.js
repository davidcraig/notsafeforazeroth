import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Shaman } from '../../data/classes/shaman'

export default function ClassShaman() {
  const props = {
    title: 'Shaman',
    class: Shaman,
  }

  return (
    <Page { ...props }></Page>
  )
}
