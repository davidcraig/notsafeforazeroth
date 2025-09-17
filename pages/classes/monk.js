import React from 'react'
import { Card } from '@davidcraig/react-bulma'
import Page from '../../Components/WoWClassPage'
import { Monk } from '../../data/classes/monk'

export default function ClassMonk() {
  const props = {
    title: 'Monk',
    class: Monk,
    specContent: {
      brewmaster: (
        <Card
          ytVideo='3ZukkpWAXOQ'
          title='Monk Tank Guide'
          videoHeight='250'
        />
      ),
      windwalker: (
        <Card
          title='Weak Auras'
        >
          <div className='p-4'>
            <a href='https://wago.io/WindwalkerLastAbility'>WindwalkerLastAbility</a>
          </div>
        </Card>
      )
    }
  }

  return (
    <Page { ...props }></Page>
  )
}
