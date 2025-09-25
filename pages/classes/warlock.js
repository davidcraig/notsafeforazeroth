import React from 'react'
import Page from '../../Components/WoWClassPage'
import Warlock from '@davidcraig/wowdata/classes/warlock'

export default function ClassWarlock() {
  const props = {
    title: 'Warlock',
    class: Warlock,
  }

  return (
    <Page { ...props }></Page>
  )
}
