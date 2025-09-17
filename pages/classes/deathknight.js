import React from 'react'
import WoWClassPage from '../../Components/WoWClassPage'
import { DeathKnight } from '../../data/classes/dk'

const DISCORD = 'https://discord.gg/acherus'


export default function ClassDeathKnight() {
  return (
    <WoWClassPage
      title='Death Knight'
      class={DeathKnight}
    ></WoWClassPage>
  )
}
