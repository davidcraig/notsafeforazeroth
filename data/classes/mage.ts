import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Mage: WoWClass = {
  name: 'Mage', css: 'mage', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/mage/mage.png',
  specs: [
    {
      name: 'Arcane',
      key: 'arcane',
      role: ROLES.DPS,
      img: '/img/wow/classes/mage/arcane.jpg',
    },
    {
      name: 'Fire',
      key: 'fire',
      role: ROLES.DPS,
      img: '/img/wow/classes/mage/fire.jpg',
    },
    {
      name: 'Frost',
      key: 'frost',
      role: ROLES.DPS,
      img: '/img/wow/classes/mage/frost.jpg',
    },
  ],
  discord: 'https://discord.gg/WzYCnbg'
}
