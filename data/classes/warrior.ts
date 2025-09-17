import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Warrior: WoWClass = {
  name: 'Warrior', css: 'warrior', roles: [ ROLES.DPS, ROLES.Tank ],
  img: '/img/wow/classes/warrior/warrior.png',
}
