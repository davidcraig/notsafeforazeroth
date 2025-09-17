import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Warlock: WoWClass = {
  name: 'Warlock', css: 'warlock', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/warlock/warlock.png',
}
