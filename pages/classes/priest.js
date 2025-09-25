import React from 'react'
import WoWClassPage from '../../Components/WoWClassPage'
import Priest from '@davidcraig/wowdata/classes/priest'

export default function ClassPriest() {
  const props = {
    title: 'Priest',
    class: Priest,
  }

  return (
    <WoWClassPage { ...props }></WoWClassPage>
  )
}
