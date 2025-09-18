import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Monk: WoWClass = {
  name: 'Monk',
  css: 'monk',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/monk/monk.png',
  discord: 'https://discord.gg/0dkfBMAxzTkWj21F',
  specs: [
    {
      name: 'Brewmaster',
      key: 'brewmaster',
      role: ROLES.Tank,
      img: '/img/wow/classes/monk/brew.jpg'
    },
    {
      name: 'Windwalker',
      key: 'windwalker',
      role: ROLES.DPS,
      img: '/img/wow/classes/monk/ww.jpg'
    },
    {
      name: 'Mistweaver',
      key: 'mistweaver',
      role: ROLES.Healer,
      img: '/img/wow/classes/monk/mw.jpg'
    },
  ],
}

export default Monk
