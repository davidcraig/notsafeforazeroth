import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Hunter } from '../../data/classes/hunter'

export default function ClassHunter() {
  return (
    <Page
      title='Hunter'
      class={Hunter}
    >
    </Page>
  )
}
