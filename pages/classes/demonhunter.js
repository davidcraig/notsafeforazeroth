import React from 'react'
import Page from '../../Components/WoWClassPage'
import DemonHunter from '@davidcraig/wowdata/classes/demon-hunter'

export default function ClassDemonHunter() {
  return (
    <Page
      title='Demon Hunter'
      class={DemonHunter}
    >
    </Page>
  )
}
