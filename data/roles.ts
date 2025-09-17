export type Role = {
  name: string
  icon: string
}

export const ROLES: Record<string, Role> = {
  DPS: { name: 'DPS', icon: '/img/wow/dps.png' },
  Tank: { name: 'Tank', icon: '/img/wow/tank.png' },
  Healer: { name: 'Healer', icon: '/img/wow/healer.png' },
}

export default ROLES
