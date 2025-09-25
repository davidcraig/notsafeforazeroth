import React from 'react'
import { ItemGrid } from '@davidcraig/react-bulma'
import Page from '../../Components/Page.js'
import { Card } from '@davidcraig/react-bulma'
import TabbedContent from '@nsfa/Components/TabbedContent.tsx'
import { castleNathria } from '../../data/shadowlands/raids.ts'

const SHOW_MYTHIC = false

const Tactics = {
  shriekwing: (
    <>
      <p className='tanks'>Tanks</p>
      <a className='spell' href='https://www.wowhead.com/spell=328857'>Exsanguinating Bite</a> applies 10 x Exsanguinated (Stacks)
      <p className='healers'>Healers</p>
      Stand 12 yards away from boss (To avoid Blind Swipe - Cone AOE)
      <p className='all'>Everyone</p>
      <a className='spell' href='https://www.wowhead.com/spell=342077'>Echolocation</a> (White pulsing circle debuff, drops bat on top of you) - Leaves a blood pool on the ground, move away from raid.
    </>
  )
}

const TLDRTactics = {
  title: 'TLDR Tactics',
  content: (
    <ItemGrid columns={2}>
      <Card title='Shriekwing'>{Tactics.shriekwing}</Card>
    </ItemGrid>
  )
}

const NormalHeroicVideos = {
  title: 'Videos: Normal / Heroic',
  content: (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {
        castleNathria.map(boss => (
          <Card className='mt-4' ytVideo={boss.video} title={boss.name} />
        ))
      }
    </div>
  )
}
const MythicVideos = {
  title: 'Mythic',
  content: (
    <ItemGrid columns={2}>
      {
        castleNathria.map(boss => (
          <Card ytVideo={boss.video_mythic} title={boss.name} />
        ))
      }
    </ItemGrid>
  )
}

export default function CastleNathriaPage() {
  const tabbedContent = [NormalHeroicVideos]
  if (SHOW_MYTHIC) {
    tabbedContent.push(MythicVideos)
  }
  tabbedContent.push(TLDRTactics)

  return <Page title='Castle Nathria'>
    <h1 className='h1'>Castle Nathria</h1>
    <TabbedContent content={tabbedContent} />
  </Page>
}
