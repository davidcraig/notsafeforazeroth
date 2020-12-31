import { Navbar, Brand, Start, End, Item, Dropdown } from '@davidcraig/react-bulma'

const pages = [
  { name: 'Rules', slug: 'rules' },
  { name: 'Officers', slug: 'officers' },
  {
    name: 'Classes', pages: [
      { name: 'Priest', slug: 'priest' },
      { name: 'Mage', slug: 'mage' },
      { name: 'Warlock', slug: 'warlock' },
      { name: 'Druid', slug: 'druid' },
      { name: 'Rogue', slug: 'rogue' },
      { name: 'Monk', slug: 'monk' },
      { name: 'Demon Hunter', slug: 'demonhunter' },
      { name: 'Hunter', slug: 'hunter' },
      { name: 'Shaman', slug: 'shaman' },
      { name: 'Warrior', slug: 'warrior' },
      { name: 'Paladin', slug: 'paladin' },
      { name: 'Death Knight', slug: 'deathknight' }
    ]
  }
]

export default function Navigation() {
  return (
    <Navbar>
      <Brand title='Not Safe for Azeroth' />
      <Start>
        {pages.map(page => {
          if (page.pages) {
            return <Dropdown key={page.name} title={page.name}>
              {page.pages.map(dropdownPage => {
                let itemCssClass = ''
                if (page.name === 'Classes') {
                  itemCssClass = dropdownPage.slug
                }
                return <Item className={itemCssClass} key={dropdownPage.slug} title={dropdownPage.name} href={dropdownPage.slug} />
              })}
            </Dropdown>
          }
          return <Item key={page.slug} title={page.name} href={page.slug} />
        })}
      </Start>
      <End>
        <Item
          href='https://raider.io/guilds/eu/silvermoon/Not%20Safe%20for%20Azeroth'
          title='Raider.IO'
          target='_blank'
        />
        <Item
          href='https://www.wowprogress.com/guild/eu/silvermoon/Not+Safe+for+Azeroth'
          title='WoWProgress'
          target='_blank'
        />
      </End>
    </Navbar>
  )
}

