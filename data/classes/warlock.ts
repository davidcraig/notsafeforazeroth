import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Warlock: WoWClass = {
  name: 'Warlock', css: 'warlock', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/warlock/warlock.png',
  discord: 'https://discord.gg/0onXDymd9Wpc2CEu',
  specs: [
    {
      name: 'Affliction',
      key: 'affliction',
      role: ROLES.DPS,
      img: '/img/wow/classes/warlock/aff.jpg',
    },
    {
      name: 'Destruction',
      key: 'destruction',
      role: ROLES.DPS,
      img: '/img/wow/classes/warlock/destro.jpg',
    },
    {
      name: 'Demonology',
      key: 'demonology',
      role: ROLES.DPS,
      img: '/img/wow/classes/warlock/demo.jpg',
    },
  ]
}

export default Warlock
