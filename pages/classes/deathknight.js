import React from 'react'
import WoWClassPage from '../../Components/WoWClassPage'
import DeathKnight from '@davidcraig/wowdata/classes/death-knight'

export default function ClassDeathKnight() {
  return (
    <WoWClassPage
      title='Death Knight'
      class={DeathKnight}
    ></WoWClassPage>
  )
}
