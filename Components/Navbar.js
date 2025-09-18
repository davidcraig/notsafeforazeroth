import React, { useState } from 'react'
import { Navbar, Brand, Start, End, Item, Dropdown } from '@davidcraig/react-bulma'

const externalLinkSvg = <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#ececec' d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>;

const showClassLinks = true;

const pages = [
  { name: 'Crafting', slug: '/crafting' },
  { name: 'Professions', slug: '/professions' },
]

const wikiPages = [
  {
    name: 'War Within', pages: [
      { name: 'Raids', pages: [
        { name: 'Nerub-ar Palace', slug: '/warwithin/raid/nerubarpalace' },
        { name: 'Manaforge Omega', slug: '/warwithin/raid/manaforge' }
      ] }
    ],
  }
  // {
  //   name: 'Shadowlands', pages: [
  //     { name: 'Castle Nathria', slug: '/shadowlands/nathria' },
  //     { name: 'FAQ', slug: '/shadowlands/faq' },
  //   ]
  // }
]

if (showClassLinks) {
  wikiPages.push(
    {
      name: 'Classes', pages: [
        { name: 'Priest', slug: '/classes/priest', wowClassColour: true },
        { name: 'Mage', slug: '/classes/mage', wowClassColour: true },
        { name: 'Warlock', slug: '/classes/warlock', wowClassColour: true },
        { name: 'Druid', slug: '/classes/druid', wowClassColour: true },
        { name: 'Rogue', slug: '/classes/rogue', wowClassColour: true },
        { name: 'Monk', slug: '/classes/monk', wowClassColour: true },
        { name: 'Demon Hunter', slug: '/classes/demonhunter', wowClassColour: true },
        { name: 'Hunter', slug: '/classes/hunter', wowClassColour: true },
        { name: 'Shaman', slug: '/classes/shaman', wowClassColour: true },
        { name: 'Warrior', slug: '/classes/warrior', wowClassColour: true },
        { name: 'Paladin', slug: '/classes/paladin', wowClassColour: true },
        { name: 'Death Knight', slug: '/classes/deathknight', wowClassColour: true },
        { name: 'Evoker', slug: '/classes/evoker', wowClassColour: true }
      ]
    }
  )
}

const DropdownLink = ({ id, title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div key={id} className={`navbar-item ml-4 has-dropdown ${open ? "is-open" : ""}`}>
      <a className='navbar-link' href="#" onClick={(e) => { e.preventDefault(); setOpen(!open) }}>{title}</a>
      <div className='navbar-dropdown'>
        {children}
      </div>
    </div>
  )
}

function renderNavigationItem(item) {
  if (item.pages) {
    return <DropdownLink key={item.name} className='pr-2 mr-4 ml-4' id={item.name} title={item.name}>
      {item.pages.map(dropdownPage => {
        return renderNavigationItem(dropdownPage)
      })}
    </DropdownLink>
  }
  let itemCssClass = ''
  if (item.wowClassColour) {
    itemCssClass = item.slug.replace('/classes/', '')
  }
  return <Item className={itemCssClass} key={item.slug} title={item.name} href={item.slug} />
}

const externalLink = (href, title) => {
  return (
    <a key={href} className='ml-4 p-4 md:p-0 flex' href={href} target='_blank' rel='noopener noreferrer'>{title} <span style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}>{externalLinkSvg}</span></a>
  )
}

export default function Navigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className={`navbar p-4 flex flex-col gap-4 md:flex-row ${props.className}`}>
      <div className='flex items-center w-full'>
        <a className='brand font-bold text-xl mr-auto' href='/'>&lt;Not Safe for Azeroth&gt;</a>
        <button aria-label='Toggle navigation' className='navbar-burger md:hidden' onClick={() => setMobileOpen(!mobileOpen)}>
          <span>☰</span>
        </button>
      </div>
      <div className={`nav-links ml-auto gap-4 mr-auto md:mr-0 flex flex-col md:flex-row text-center ${mobileOpen ? 'is-open' : ''}`} onClick={() => setMobileOpen(false)}>
        {pages.map(page => {
          return renderNavigationItem(page)
        })}
        {wikiPages.map(page => {
          return renderNavigationItem(page)
        })}
        {externalLink('https://raider.io/guilds/eu/tarren-mill/Not%20Safe%20for%20Azeroth', 'Raider.IO')}
        {externalLink('https://discord.gg/CtqNwgQnJm', 'Discord')}
        {externalLink('https://worldofwarcraft.blizzard.com/en-gb/guild/eu/tarren-mill/not-safe-for-azeroth', 'Armory')}
      </div>
    </nav>
  )
}

