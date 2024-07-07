import classes from './wow-classes'

import GetLevelCap from '../Functions/WoW/GetLevelCap'

const LEVEL_CAP = GetLevelCap();

const Characters = [
  { name: 'Sniperdrood', class: classes.Druid, level: LEVEL_CAP },
  { name: 'Snipermagi', class: classes.Mage, level: LEVEL_CAP },
  { name: 'Snipedin', class: classes.Paladin, level: LEVEL_CAP },
  { name: 'Snípéh', class: classes.Hunter, level: LEVEL_CAP },
  { name: 'Tyriant', class: classes.Rogue, level: LEVEL_CAP }
]

export function findByName(name) {
  const found = Characters.find(function(char) {
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

export default Characters
