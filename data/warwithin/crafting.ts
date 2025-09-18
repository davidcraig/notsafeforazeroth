import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
// Items now sourced from character files per profession
import Sniperdrood from "../characters/TarrenMill/Sniperdrood"
import Snipedeath from "../characters/TarrenMill/Snipedeath"
import Snipermagi from "../characters/TarrenMill/Snipermagi"
import Sniperwar from "../characters/Silvermoon/Sniperwar"
import Snipá from "../characters/Magtheridon/Snipá"
import type { CraftedItem } from "../../Types/CraftedItem"

// War Within Crafting

const TWW_PROFESSION_CAP = 100

function getExpansionSkill(expansionProgress: unknown): number {
  if (typeof expansionProgress === 'number') {
    return expansionProgress
  }
  if (expansionProgress && typeof expansionProgress === 'object') {
    // @ts-ignore - allow reading optional skill on loose object shape
    return (expansionProgress?.skill as number) ?? 0
  }
  return 0
}

function getExpansionItems(expansionProgress: unknown): CraftedItem[] | undefined {
  if (expansionProgress && typeof expansionProgress === 'object') {
    // @ts-ignore - allow reading optional items on loose object shape
    return expansionProgress?.items as CraftedItem[] | undefined
  }
  return undefined
}

// Blacksmithing
const bs = {
  name: 'Blacksmithing',
  crafters: [
    {
      ...Snipedeath,
      skill: { current: getExpansionSkill(Snipedeath?.professions?.blacksmithing?.tww), cap: TWW_PROFESSION_CAP },
      items: getExpansionItems(Snipedeath.professions?.blacksmithing?.tww)
    },
  ],
}

const lw = {
  name: 'Leatherworking',
  crafters: [
    {
      ...Snipá,
      skill: { current: getExpansionSkill(Snipá?.professions?.leatherworking?.tww), cap: TWW_PROFESSION_CAP },
      items: getExpansionItems(Snipá.professions?.leatherworking?.tww)
    }
  ],
}

const skinning = {
  name: 'Skinning',
  crafters: [
    {
      ...Snipá,
      "skill": { current: getExpansionSkill(Snipá?.professions?.skinning?.tww), cap: TWW_PROFESSION_CAP },
      "items": []
    }
  ]
}

const mining = {
  name: 'Mining',
  crafters: [
    {
      ...Sniperwar,
      skill: { current: getExpansionSkill(Sniperwar.professions?.mining?.tww), cap: TWW_PROFESSION_CAP }
    },
    {
      ...Sniperdrood,
      skill: { current: getExpansionSkill(Sniperdrood.professions?.mining?.tww), cap: (TWW_PROFESSION_CAP + 5) } // 5 racial bonus
    }
  ]
}

const eng = {
  name: 'Engineering',
  crafters: [
    {
      ...Sniperwar,
      skill: { current: getExpansionSkill(Sniperwar.professions?.engineering?.tww), cap: TWW_PROFESSION_CAP },
      items: getExpansionItems(Sniperwar.professions?.engineering?.tww)
    }
  ],
}

const tailor = {
  name: 'Tailoring',
  crafters: [
    {
      ...Snipermagi,
      skill: { current: getExpansionSkill(Snipermagi.professions?.tailoring?.tww), cap: TWW_PROFESSION_CAP },
      items: getExpansionItems(Snipermagi.professions?.tailoring?.tww)
    }
  ]
}

const ench = {
  name: 'Enchanting',
  crafters: [
    {
      ...Snipermagi,
      skill: { current: getExpansionSkill(Snipermagi.professions?.enchanting?.tww), cap: TWW_PROFESSION_CAP },
      items: getExpansionItems(Snipermagi.professions?.enchanting?.tww)
    }
  ]
}

const herbalism = {
  name: 'Herbalism',
  crafters: [
    {
      ...Sniperdrood,
      skill: { current: getExpansionSkill(Sniperdrood.professions?.herbalism?.tww), cap: TWW_PROFESSION_CAP },
      "items": []
    }
  ]
}

const cooking = {
  name: 'Cooking',
  crafters: [
    {
      ...Snipá,
      "skill": { current: getExpansionSkill(Snipá.professions?.cooking?.tww), cap: TWW_PROFESSION_CAP },
      "items": getExpansionItems(Snipá.professions?.cooking?.tww)
    }
  ]
}

export default {
  bs,
  lw,
  eng,
  tailor,
  ench,
  skinning,
  mining,
  herbalism,
  cooking,
}
