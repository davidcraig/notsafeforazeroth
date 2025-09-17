import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Paladin: WoWClass = {
  name: 'Paladin',
  css: 'paladin',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/paladin/paladin.png',
}
