import ROLES from "../roles"
import type { WoWClass } from "../../Types/WoWClass"

export const Druid: WoWClass = {
  name: 'Druid',
  css: 'druid',
  roles: [ ROLES.DPS, ROLES.Healer, ROLES.Tank ],
  img: '/img/wow/classes/druid/druid.png',
  specs: [
    {
      name: 'Balance',
      key: 'balance',
      role: ROLES.DPS,
      img: '/img/wow/classes/druid/boom.jpg' // spell_nature_starfall.jpg
    },
    {
      name: 'Feral',
      key: 'feral',
      role: ROLES.DPS,
      img: '/img/wow/classes/druid/cat.jpg' // ability_druid_catform.jpg
    },
    {
      name: 'Guardian',
      key: 'guardian',
      role: ROLES.Tank,
      img: '/img/wow/classes/druid/bear.jpg' // ability_racial_bearform.jpg
    },
    {
      name: 'Restoration',
      key: 'restoration',
      role: ROLES.Healer,
      img: '/img/wow/classes/druid/resto.jpg', // spell_nature_healingtouch.jpg
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/restoration-druid/' },
        { name: 'Method', url: 'https://www.method.gg/guides/restoration-druid' },
      ]
    },
  ],
  discord: []
}

export default Druid