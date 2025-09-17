import ROLES from "./roles"

import type { WoWClass } from "../Types/WoWClass"

export const Mage: WoWClass = {
  name: 'Mage', css: 'mage', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/mage/mage.png',
}

export const Warlock: WoWClass = {
  name: 'Warlock', css: 'warlock', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/warlock/warlock.png',
}



export const Rogue: WoWClass = {
  name: 'Rogue',
  css: 'rogue',
  roles: [ ROLES.DPS ],
  img: '/img/wow/classes/rogue/rogue.png',
}

export const Monk: WoWClass = {
  name: 'Monk',
  css: 'monk',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/monk/monk.png',
}

export const Hunter: WoWClass = {
  name: 'Hunter', css: 'hunter', roles: [ ROLES.DPS ],
  img: '/img/wow/classes/hunter/hunter.png',
}

export const Shaman: WoWClass = {
  name: 'Shaman', css: 'shaman', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/shaman/shaman.png',
}

export const Evoker: WoWClass = {
  name: 'Evoker', css: 'evoker', roles: [ ROLES.DPS, ROLES.Healer ],
  img: '/img/wow/classes/evoker/evoker.png',
}

export const Warrior: WoWClass = {
  name: 'Warrior', css: 'warrior', roles: [ ROLES.DPS, ROLES.Tank ],
  img: '/img/wow/classes/warrior/warrior.png',
}

export const Paladin: WoWClass = {
  name: 'Paladin',
  css: 'paladin',
  roles: [ ROLES.DPS, ROLES.Tank, ROLES.Healer ],
  img: '/img/wow/classes/paladin/paladin.png',
}

