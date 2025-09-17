import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Mage } from '../../data/classes/mage'

export default function ClassMage() {
  const props = {
    title: 'Mage',
    class: Mage,
  }

  return (
    <Page { ...props } />
  )
}
