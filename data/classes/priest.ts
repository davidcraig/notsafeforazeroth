import ROLES from "../roles"
import type { WoWClass } from "../../Types/WoWClass"

export const Priest: WoWClass = {
  name: 'Priest', css: 'priest', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/priest/priest.png',
  specs: [
    {
      name: 'Holy',
      key: 'holy',
      role: ROLES.Healer,
      img: '/img/wow/classes/priest/holy.jpg' // spell_holy_guardianspirit.jpg
    },
    {
      name: 'Discipline',
      key: 'discipline',
      role: ROLES.Healer,
      img: '/img/wow/classes/priest/disc.jpg' // spell_holy_powerwordshield.jpg
    },
    {
      name: 'Shadow',
      key: 'shadow',
      role: ROLES.DPS,
      img: '/img/wow/classes/priest/shadow.jpg' // spell_shadow_shadowwordpain.jpg
    },
  ],
  discord: ['https://discord.gg/WarcraftPriests', 'https://discord.gg/focusedwill']
}

export default Priest
