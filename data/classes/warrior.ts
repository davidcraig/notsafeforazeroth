import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Warrior: WoWClass = {
  name: 'Warrior', css: 'warrior', roles: [ ROLES.DPS, ROLES.Tank ],
  img: '/img/wow/classes/warrior/warrior.png',
  specs: [
    {
      name: 'Arms',
      key: 'arms',
      role: ROLES.DPS,
      img: '/img/wow/classes/warrior/arms.jpg'
    },
    {
      name: 'Fury',
      key: 'fury',
      role: ROLES.DPS,
      img: '/img/wow/classes/warrior/fury.jpg'
    },
    {
      name: 'Protection',
      key: 'protection',
      role: ROLES.Tank,
      img: '/img/wow/classes/warrior/prot.jpg'
    },
  ],
  discord: 'https://discord.gg/Skyhold'
}

export default Warrior
