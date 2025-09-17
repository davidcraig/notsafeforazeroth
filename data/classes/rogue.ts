import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Rogue: WoWClass = {
  name: 'Rogue',
  css: 'rogue',
  roles: [ ROLES.DPS ],
  img: '/img/wow/classes/rogue/rogue.png',
}
