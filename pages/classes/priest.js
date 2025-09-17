import React from 'react'
import Page from '../../Components/WoWClassPage'
import Priest from '../../data/classes/priest'


export default function ClassPriest() {
  const props = {
    title: 'Priest',
    class: Priest,
  }

  return (
    <Page { ...props }></Page>
  )
}
