import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const Evoker: WoWClass = {
  name: 'Evoker', css: 'evoker', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/evoker/evoker.jpg',
  specs: [
    {
      name: 'Devastation',
      key: 'devastation',
      role: ROLES.DPS,
      img: '/img/wow/classes/evoker/devastation.jpg'
    },
    {
      name: 'Preservation',
      key: 'preservation',
      role: ROLES.Healer,
      img: '/img/wow/classes/evoker/preservation.jpg'
    },
    {
      name: 'Augmentation',
      key: 'augmentation',
      role: ROLES.DPS,
      img: '/img/wow/classes/evoker/augmentation.jpg'
    },
  ],
}

export default Evoker
