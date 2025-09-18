import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Rogue: WoWClass = {
  name: 'Rogue',
  css: 'rogue',
  roles: [ ROLES.DPS ],
  img: '/img/wow/classes/rogue/rogue.png',
  discord: 'https://discord.gg/0h08tydxoNhfDVZf',
  specs: [
    {
      name: 'Outlaw',
      key: 'outlaw',
      role: ROLES.DPS,
      img: '/img/wow/classes/rogue/outlaw.jpg'
    },
    {
      name: 'Subtlety',
      key: 'subtlety',
      role: ROLES.DPS,
      img: '/img/wow/classes/rogue/subt.jpg'
    },
    {
      name: 'Assassination',
      key: 'assassination',
      role: ROLES.DPS,
      img: '/img/wow/classes/rogue/ass.jpg'
    },
  ]
}

export default Rogue
