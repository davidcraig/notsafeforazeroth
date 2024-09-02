import React from 'react'
import PageWithWidgets from '../../../Components/PageWithWidgets'
import Page from '../../../Components/Page'
import Card from '@davidcraig/react-bulma/dist/Card/Card'
import YoutubeEmbed from '../../../Components/YoutubeEmbed'
import { default as nerubBosses } from '../../../data/warwithin/progression/nerubarPalace'

const imgPath = '/img/warwithin/raid/nerubar/'

export default function NerubarPalace(props) {
  return <Page title='Nerub-ar Palace'>
    <h1 className='text-xl'>Nerub-ar Palace</h1>

    <h2 className='text-lg'>Boss Guides</h2>
    <div className=''>

      {nerubBosses.map((boss,index) => {
        return <div key={boss.slug} className='mt-4'>
          <h1>{boss.name} ({index+1} / 8)</h1>
          <div className='flex flex-row'>
            {boss.img && (
              <img style={{flexBasis: '50%', flexGrow: 0, flexShrink: 0, maxWidth: '50%'}} src={boss.img ? `${imgPath}${boss.img}` : null} />
            )}
            {boss.video && (
              <YoutubeEmbed url={boss.video} height='450' />
            )}

          </div>
        </div>
      })}

      {/* {bosses.map(boss => {
        return <Card {...boss} videoHeight='400'>
          {boss.img && (
            <img src={boss.img ? `${imgPath}${boss.img}` : null} />
          )}
        </Card>
      })} */}

    </div>
  </Page>
}

