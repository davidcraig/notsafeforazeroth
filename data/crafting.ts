// Centralized crafting helpers and configuration
import Snipedeath from './characters/TarrenMill/Snipedeath'
import Sniperdrood from './characters/TarrenMill/Sniperdrood'
import Snipermagi from './characters/TarrenMill/Snipermagi'
import Sniperwar from './characters/Silvermoon/Sniperwar'
import Snipá from './characters/Magtheridon/Snipá'
import Whoorelips from './characters/TarrenMill/Whoorelips'
import Aronin from './characters/TarrenMill/Aronin'

export const CHARACTERS = [
  Snipedeath,
  Sniperdrood,
  Snipermagi,
  Sniperwar,
  Snipá,
  Whoorelips,
  Aronin
]

export const PROF_NAME_MAP = {
  alchemy: 'Alchemy',
  blacksmithing: 'Blacksmithing',
  enchanting: 'Enchanting',
  engineering: 'Engineering',
  inscription: 'Inscription',
  jewelcrafting: 'Jewelcrafting',
  leatherworking: 'Leatherworking',
  tailoring: 'Tailoring',
  skinning: 'Skinning',
  herbalism: 'Herbalism',
  mining: 'Mining',
  cooking: 'Cooking',
  fishing: 'Fishing',
}

export const SKILL_CAPS = {
  tww: {
    default: 100,
    fishing: 300
  },
  df: {
    default: 100,
  },
  sl: {
    default: 100,
  },
  bfa: {
    default: 175,
  },
  legion: {
    default: 100,
  },
  wod: {
    default: 100,
  },
  mop: {
    default: 75,
  },
  cata: {
    default: 75
  },
  wrath: {
    default: 75,
  },
  tbc: {
    default: 75,
  },
  wow: {
    default: 300,
  }
}

export function getSkillFromProgress(progress) {
  if (typeof progress === 'number') return progress
  if (progress && typeof progress === 'object') return progress.skill ?? 0
  return 0
}

export function getItemsFromProgress(progress) {
  if (progress && typeof progress === 'object') return progress.items || []
  return []
}

export function buildExpansionCraftingData(expansionSlug) {
  const byProfession = {}

  CHARACTERS.forEach(character => {
    const professions = character.professions || {}
    Object.keys(professions).forEach(profKey => {
      const perExpansion = professions[profKey] || {}
      const progress = perExpansion[expansionSlug]
      if (progress == null) return

      if (!byProfession[profKey]) {
        byProfession[profKey] = {
          name: PROF_NAME_MAP[profKey] || profKey,
          crafters: [],
        }
      }

      byProfession[profKey].crafters.push({
        ...character,
        skill: {
          current: getSkillFromProgress(progress),
          cap: (SKILL_CAPS[expansionSlug]?.[profKey] ?? SKILL_CAPS[expansionSlug]?.default ?? 100),
        },
        items: getItemsFromProgress(progress),
      })
    })
  })

  return byProfession
}

type CharacterSkill = { professionKey: string; professionName: string; current: number; cap: number }
type CharacterSkillsEntry = { character: any; skills: CharacterSkill[] }

export function buildCharacterSkillsByExpansion(expansionSlug: string) {
  const byCharacter: Record<string, CharacterSkillsEntry> = {}

  CHARACTERS.forEach(character => {
    const professions = (character as any).professions || {}
    const skills: CharacterSkill[] = []
    Object.keys(professions).forEach((profKey: string) => {
      const perExpansion = professions[profKey] || {}
      const progress = perExpansion[expansionSlug]
      if (progress == null) return

      skills.push({
        professionKey: profKey,
        professionName: (PROF_NAME_MAP as any)[profKey] || profKey,
        current: getSkillFromProgress(progress),
        cap: ((SKILL_CAPS as any)[expansionSlug]?.[profKey] ?? (SKILL_CAPS as any)[expansionSlug]?.default ?? 100),
      })
    })

    if (skills.length > 0) {
      byCharacter[`${(character as any).name}-${(character as any).realm}`] = { character, skills }
    }
  })

  return byCharacter
}

export default {
  buildExpansionCraftingData,
  buildCharacterSkillsByExpansion,
  SKILL_CAPS,
  PROF_NAME_MAP,
}


