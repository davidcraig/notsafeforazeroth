import React from 'react'
import { Navbar, Brand, Start, End, Item, Dropdown } from '@davidcraig/react-bulma'

const pages = [
  {
    name: 'Guild', pages: [
      { name: 'Rules', slug: '/rules' },
      { name: 'Officers', slug: '/officers' },
      { name: 'Crafting', slug: '/crafting' },
    ]
  }
]

const wikiPages = [
  // {
  //   name: 'Classes', pages: [
  //     { name: 'Priest', slug: '/classes/priest', wowClassColour: true },
  //     { name: 'Mage', slug: '/classes/mage', wowClassColour: true },
  //     { name: 'Warlock', slug: '/classes/warlock', wowClassColour: true },
  //     { name: 'Druid', slug: '/classes/druid', wowClassColour: true },
  //     { name: 'Rogue', slug: '/classes/rogue', wowClassColour: true },
  //     { name: 'Monk', slug: '/classes/monk', wowClassColour: true },
  //     { name: 'Demon Hunter', slug: '/classes/demonhunter', wowClassColour: true },
  //     { name: 'Hunter', slug: '/classes/hunter', wowClassColour: true },
  //     { name: 'Shaman', slug: '/classes/shaman', wowClassColour: true },
  //     { name: 'Warrior', slug: '/classes/warrior', wowClassColour: true },
  //     { name: 'Paladin', slug: '/classes/paladin', wowClassColour: true },
  //     { name: 'Death Knight', slug: '/classes/deathknight', wowClassColour: true }
  //   ]
  // },
  // {
  //   name: 'War Within', pages: [],
  // }
  // {
  //   name: 'Shadowlands', pages: [
  //     { name: 'Castle Nathria', slug: '/shadowlands/nathria' },
  //     { name: 'FAQ', slug: '/shadowlands/faq' },
  //   ]
  // }
]

function renderNavigationItem(item) {
  if (item.pages) {
    return <Dropdown className='pr-2' key={item.name} title={item.name}>
      {item.pages.map(dropdownPage => {
        return renderNavigationItem(dropdownPage)
      })}
    </Dropdown>
  }
  let itemCssClass = ''
  if (item.wowClassColour) {
    itemCssClass = item.slug.replace('/classes/', '')
  }
  return <Item className={itemCssClass} key={item.slug} title={item.name} href={item.slug} />
}

const externalLink = (href, title) => {
  return <a className='ml-4 p-4 md:p-0' href={href} target='_blank' rel='noopener noreferrer'>{title}</a>
}

export default function Navigation(props) {
  return (
    <nav className={`navbar p-4 flex flex-col md:flex-row ${props.className}`}>
      <a className='brand font-bold text-xl ml-auto md:ml-0 mr-auto' href='/'>&lt;Not Safe for Azeroth&gt;</a>
      <div className='ml-auto mr-auto md:mr-0 flex flex-col md:flex-row text-center'>
        {wikiPages.map(page => {
          return renderNavigationItem(page)
        })}
        {externalLink('https://raider.io/guilds/eu/tarren-mill/Not%20Safe%20for%20Azeroth', 'Raider.IO')}
        {externalLink('https://discord.gg/CtqNwgQnJm', 'Discord')}
        {externalLink('https://worldofwarcraft.blizzard.com/en-gb/guild/eu/tarren-mill/not-safe-for-azeroth', 'Armoury')}
      </div>
    </nav>
    // <Navbar>
    //   <Brand title='Not Safe for Azeroth' />
    //   <Start>
    //     {pages.map(page => {
    //       return renderNavigationItem(page)
    //     })}
    //   </Start>
    //   <End>
        
    //     <Item
    //       href='https://raider.io/guilds/eu/tarren-mill/Not%20Safe%20for%20Azeroth'
    //       title='Raider.IO'
    //       target='_blank'
    //     />
    //   </End>
    // </Navbar>
  )
}

