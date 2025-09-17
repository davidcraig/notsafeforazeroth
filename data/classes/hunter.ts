import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Hunter: WoWClass = {
  name: 'Hunter', css: 'hunter', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/hunter/hunter.png',
}
