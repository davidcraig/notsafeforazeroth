import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Hunter: WoWClass = {
  name: 'Hunter', css: 'hunter', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/hunter/hunter.png',
  discord: ['https://discord.gg/yqer4BX', 'https://discord.gg/G3tYdTG'],
  specs: [
    {
      name: 'Marksmanship',
      key: 'marksmanship',
      role: ROLES.DPS,
      img: '/img/wow/classes/hunter/mm.jpg'
    },
    {
      name: 'Beast Mastery',
      key: 'beastmastery',
      role: ROLES.DPS,
      img: '/img/wow/classes/hunter/bm.jpg'
    },
    {
      name: 'Survival',
      key: 'survival',
      role: ROLES.DPS,
      img: '/img/wow/classes/hunter/sv.jpg'
    },
  ],
}
