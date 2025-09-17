import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const DemonHunter: WoWClass = {
  name: 'Demon Hunter',
  css: 'demonhunter',
  roles: [ ROLES.DPS, ROLES.Tank ],
  discord: 'https://discord.gg/zGGkNGC',
  img: '/img/wow/classes/demonhunter/demon-hunter.png',
  specs: [
    {
      name: 'Havoc',
      key: 'havoc',
      role: ROLES.DPS,
      img: '/img/wow/classes/demonhunter/havoc.jpg', // https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/havoc-demon-hunter-pve-dps-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/havoc-demon-hunter' },
      ]
    },
    {
      name: 'Vengeance',
      key: 'vengeance',
      role: ROLES.Tank,
      img: '/img/wow/classes/demonhunter/vengeance.jpg', // https://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/vengeance-demon-hunter-pve-tank-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/vengeance-demon-hunter' },
      ]
    },
]
}

export default DemonHunter
