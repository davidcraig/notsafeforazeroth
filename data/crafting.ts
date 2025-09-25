import { Race } from "@davidcraig/wowdata/Race"

import CHARACTERS from './characters.ts'

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
  // The Last Titan
  tlt:{
    default: 100, // Assumed for now
  },
  midnight: {
    default: 100, // Assumed for now
  },
  // The War Within
  tww: {
    default: 100,
    fishing: 300
  },
  df: {
    default: 100,
  },
  sl: {
    enchanting: 115,
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

// Sources:
//  - https://www.wowhead.com/news/skill-bonuses-reduced-with-profession-racials-in-dragonflight-330138
export const RACIAL_PROFESSION_BONUSES: Partial<Record<Race, Partial<Record<keyof typeof PROF_NAME_MAP, number>>>> = {
  [Race.BloodElf]: {
    enchanting: 5
  },
  [Race.DarkIronDwarf]: {
    blacksmithing: 5
  },
  [Race.Draenei]: {
    jewelcrafting: 5,
  },
  [Race.Goblin]: {
    alchemy: 5,
  },
  [Race.KulTiran]: {
    leatherworking: 2, // <-- Best
    tailoring: 2, // <-- Best
    fishing: 2, // <-- Best

    alchemy: 2, // [Goblin]
    blacksmithing: 2, // [Dark Iron Dwarf] or [Lightforged Draenei]
    enchanting: 2, // [Blood Elf]
    engineering: 2, // [Gnome]
    inscription: 2, // [Nightborne]
    jewelcrafting: 2, // [Draenei]
    skinning: 2, // [Worgen]
    herbalism: 2, // [Tauren]
    mining: 2, // [Highmountain Tauren]
    cooking: 2, // [Pandaren]
  },
  [Race.Gnome]: {
    engineering: 5,
  },
  [Race.HighmountainTauren]: {
    mining: 5,
  },
  [Race.LightforgedDraenei]: {
    blacksmithing: 5
  },
  [Race.Nightborne]: {
    inscription: 5
  },
  [Race.Pandaren]: {
    cooking: 5
  },
  [Race.Tauren]: {
    herbalism: 5
  },
  [Race.Worgen]: {
    skinning: 5
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

      const baseCap = SKILL_CAPS[expansionSlug]?.[profKey] ?? SKILL_CAPS[expansionSlug]?.default ?? 100
      const racialBonus = RACIAL_PROFESSION_BONUSES[character.race]?.[profKey] ?? 0

      byProfession[profKey].crafters.push({
        ...character,
        skill: {
          current: getSkillFromProgress(progress),
          cap: baseCap + racialBonus,
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

      const baseCap = (SKILL_CAPS as any)[expansionSlug]?.[profKey] ?? (SKILL_CAPS as any)[expansionSlug]?.default ?? 100
      const racialBonus = RACIAL_PROFESSION_BONUSES[character.race]?.[profKey] ?? 0

      skills.push({
        professionKey: profKey,
        professionName: (PROF_NAME_MAP as any)[profKey] || profKey,
        current: getSkillFromProgress(progress),
        cap: baseCap + racialBonus,
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
