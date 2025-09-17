import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Evoker: WoWClass = {
  name: 'Evoker', css: 'evoker', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/evoker/evoker.png',
}
