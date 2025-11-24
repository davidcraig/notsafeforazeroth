import React from 'react'
import Page from '../../Components/Page.js'

export default function Bags() {
  return (
    <Page>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-xl mb-4'>Bags</h1>
          <ul>
            <li>[36] <a className='fg-rare' href="https://www.wowhead.com/item=222856/duskweave-bag">Duskweave Bag</a> - War Within Crafted</li>
            <li>[34] <a className='fg-rare' href="https://www.wowhead.com/item=202194/misty-satchel">Misty Satchel</a> - One per character, rare from Dragonflight.</li>
          </ul> 
        </div>

        <div>
          <h1 className='text-xl mb-4'>Reagent Bags</h1>
          <ul>
            <li>[32] <a className='fg-uncommon' href="https://www.wowhead.com/item=194019/simply-stitched-reagent-bag">Simply Stitched Reagent Bag</a> - Dragonflight Crafted</li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
