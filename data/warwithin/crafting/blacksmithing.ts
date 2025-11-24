import materials from "./materials.ts";
import { Rarity } from "@davidcraig/wowdata/Rarity"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"

// 11. TWW - Blacksmithing
const BeledarsBulwark: CraftedItem = {
  name: "Beledar's Bulwark",
  type: "Shield",
  rarity: Rarity.Epic,
  url: 'https://www.wowhead.com/item=222459/beledars-bulwark',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.GloomfathomHide, quantity: 1 },
    { ...materials.RingingDeepsIngot, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 8 },
  ]
}

const EverforgedPauldrons: CraftedItem = {
  name: "Everforged Pauldrons",
  type: "Shoulder, Plate",
  rarity: Rarity.Epic,
  url: 'https://www.wowhead.com/item=222436/everforged-pauldrons',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 6 },
    { ...materials.IronclawAlloy, quantity: 8 }
  ]
}

const EverforgedVambraces: CraftedItem = {
  name: "Everforged Vambraces",
  type: "Bracers, Plate",
  rarity: Rarity.Epic,
  url: 'https://www.wowhead.com/item=222435/everforged-vambraces',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 4 },
    { ...materials.IronclawAlloy, quantity: 12 }
  ]
}

const EverforgedGauntlets: CraftedItem = {
  name: "Everforged Gauntlets",
  type: "Gloves, Plate",
  rarity: Rarity.Epic,
  url: 'https://www.wowhead.com/item=222437/everforged-gauntlets',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 6 },
    { ...materials.IronclawAlloy, quantity: 12 }
  ]
}

const ProficientLeatherworkersToolset: CraftedItem = {
  name: "Proficient Leatherworker's Toolset",
  type: "Leatherworking Accessory, Toolkit",
  rarity: Rarity.Uncommon,
  url: 'https://www.wowhead.com/item=222485/proficient-leatherworkers-toolset',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 6 },
    { ...materials.IronclawAlloy, quantity: 12 }
  ]
}

const ProficientLeatherworkersKnife: CraftedItem = {
  name: "Proficient Leatherworker's Knife",
  type: "Leatherworking Tool",
  rarity: Rarity.Uncommon,
  url: 'https://www.wowhead.com/item=222484/proficient-leatherworkers-knife',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 6 },
    { ...materials.IronclawAlloy, quantity: 12 }
  ]
}

const ProficientSickle: CraftedItem = {
  name: "Proficient Sickle",
  type: "Herbalism Tool",
  rarity: Rarity.Uncommon,
  url: 'https://www.wowhead.com/item=222480/proficient-sickle',
  materials: [
    { ...materials.CrystallinePowder, quantity: 3 },
    { ...materials.CoreAlloy, quantity: 2 }
  ]
}


export const Blacksmithing = {
    BeledarsBulwark,
    EverforgedPauldrons,
    EverforgedVambraces,
    EverforgedGauntlets,
    ProficientLeatherworkersToolset,
    ProficientLeatherworkersKnife,
    ProficientSickle
}

export default Blacksmithing
