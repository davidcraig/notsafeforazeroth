import classes from './wow-classes'

import GetLevelCap from '../Functions/WoW/GetLevelCap'

const LEVEL_CAP = GetLevelCap();

const SnipersCharacters = [
  { name: 'Sníperdk', class: classes.DeathKnight, level: 70 },
  { name: 'Sniperdrood', class: classes.Druid, level: 70 },
]
const ChrisCharacters = [
  { name: 'Aronin', class: classes.Paladin, level: 70 },
]
const RobCharacters = []
const OtherCharacters = []

const GuildCharacters = [...SnipersCharacters, ...ChrisCharacters, ...RobCharacters, ...OtherCharacters]

export function findByName(name) {
  const found = GuildCharacters.find(function(char) {
    return char.name === name;
  })
  if (typeof found === 'object') {
    if (Array.isArray(found)) {
      return found[0]
    }
    return found
  }

  return false
}

export default GuildCharacters
