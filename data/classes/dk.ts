import { ROLES } from '../roles'
import type { WoWClass } from '../../Types/WoWClass'

export const DeathKnight: WoWClass = {
  name: 'Death Knight',
  css: 'deathknight',
  img: '/img/wow/classes/deathknight/death-knight.png',
  discord: 'https://discord.gg/acherus',
  roles: [ ROLES.DPS, ROLES.Tank ],
  specs: [
    {
      name: 'Unholy',
      key: 'unholy',
      role: ROLES.DPS,
      img: '/img/wow/classes/deathknight/unholy.jpg', // spell_deathknight_unholypresence.jpg
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/unholy-death-knight/' },
        { name: 'Method', url: 'https://www.method.gg/guides/unholy-death-knight' }
      ]
    },
    {
      name: 'Frost',
      key: 'frost',
      role: ROLES.DPS,
      img: '/img/wow/classes/deathknight/frost.jpg', // spell_deathknight_frostpresence.jpg
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/frost-death-knight/' }
      ]
    },
    {
      name: 'Blood',
      key: 'blood',
      role: ROLES.Tank,
      img: '/img/wow/classes/deathknight/blood.jpg', //spell_deathknight_bloodpresence.jpg',
      guides: [
        { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide' },
        { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guide/blood-death-knight/' },
      ]
    },
  ]
}

export default DeathKnight