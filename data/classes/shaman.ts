import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Shaman: WoWClass = {
  name: 'Shaman', css: 'shaman',
  roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/shaman/shaman.png',
  discord: ['https://discord.gg/0VcupJEQX0HuE5HH', 'https://discord.gg/AcTek6e'],
  specs: [
    {
      name: 'Restoration',
      key: 'restoration',
      role: ROLES.Healer,
      img: '/img/wow/classes/shaman/resto.jpg'
    },
    {
      name: 'Enhancement',
      key: 'enhancement',
      role: ROLES.DPS,
      img: '/img/wow/classes/shaman/enh.jpg'
    },
    {
      name: 'Elemental',
      key: 'elemental',
      role: ROLES.DPS,
      img: '/img/wow/classes/shaman/ele.jpg'
    },
  ]
}
