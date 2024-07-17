import React from 'react'
import { Card } from '@davidcraig/react-bulma'
import { Column, Columns } from '@davidcraig/react-bulma/dist/Columns/Columns'
import Page from '../../Components/WoWClassPage'
import { Monk } from '../../data/wow-classes'

const guides = {
  brewmaster: [],
  mistweaver: [],
  windwalker: [],
}

const DISCORD = 'https://discord.gg/0dkfBMAxzTkWj21F'

export default function ClassMonk() {
  const props = {
    title: 'Monk',
    class: Monk,
    discord: DISCORD,
    guides: guides,
    specs: [
      { name: 'Brewmaster', key: 'brewmaster' },
      { name: 'Mistweaver', key: 'mistweaver' },
      { name: 'Windwalker', key: 'windwalker' },
    ],
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
    <Page { ...props }>
      <Columns>
        <Column>
          
        </Column>
        <Column></Column>
      </Columns>
    </Page>
  )
}
