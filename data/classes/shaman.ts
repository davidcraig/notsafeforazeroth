import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Shaman: WoWClass = {
  name: 'Shaman', css: 'shaman', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/shaman/shaman.png',
}
