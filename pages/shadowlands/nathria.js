import React from 'react'
import { ItemGrid } from '@davidcraig/react-bulma'
import PageWithWidgets from '../../Components/PageWithWidgets'
import { Card, TabbedContent } from '@davidcraig/react-bulma'
import { castleNathria } from '../../data/shadowlands/raids'

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
    <ItemGrid columns={2}>
      {
        castleNathria.map(boss => (
          <Card ytVideo={boss.video} title={boss.name} />
        ))
      }
    </ItemGrid>
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

  return <PageWithWidgets title='Castle Nathria'>
    <h1 className='h1'>Castle Nathria</h1>
    <h2 className='h2'>Videos (Fatboss)</h2>
    <TabbedContent content={tabbedContent} />
  </PageWithWidgets>
}
