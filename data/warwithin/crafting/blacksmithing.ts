import materials from "./materials";
import { Rarities } from "../../../Types/Rarity";
import { CraftedItem } from "../../../Types/CraftedItem";

// 11. TWW - Blacksmithing
const BeledarsBulwark: CraftedItem = {
  name: "Beledar's Bulwark",
  type: "Shield",
  rarity: Rarities.Epic,
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
  rarity: Rarities.Epic,
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
  rarity: Rarities.Epic,
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
  rarity: Rarities.Epic,
  url: 'https://www.wowhead.com/item=222437/everforged-gauntlets',
  materials: [
    { ...materials.SPARK, quantity: 1 },
    { ...materials.SanctifiedAlloy, quantity: 6 },
    { ...materials.IronclawAlloy, quantity: 12 }
  ]
}

export const Blacksmithing = {
    BeledarsBulwark,
    EverforgedPauldrons,
    EverforgedVambraces,
    EverforgedGauntlets
}

export default Blacksmithing
