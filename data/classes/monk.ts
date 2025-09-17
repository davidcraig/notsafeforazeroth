import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Monk: WoWClass = {
  name: 'Monk',
  css: 'monk',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/monk/monk.png',
}
