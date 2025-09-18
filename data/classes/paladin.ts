import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Paladin: WoWClass = {
  name: 'Paladin',
  css: 'paladin',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/paladin/paladin.png',
  discord: 'https://discord.gg/hammerofwrath',
  specs: [
    {
      name: 'Holy',
      key: 'holy',
      img: '/img/wow/classes/paladin/holy.jpg',
      role: ROLES.Healer
    },
    {
      name: 'Protection',
      key: 'protection',
      img: '/img/wow/classes/paladin/prot.jpg',
      role: ROLES.Tank
    },
    {
      name: 'Retribution',
      key: 'retribution',
      img: '/img/wow/classes/paladin/ret.jpg',
      role: ROLES.DPS
    },
  ]
}

export default Paladin
