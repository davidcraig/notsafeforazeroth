import { tww_materials } from "./materials";
import { Rarities } from "../../../Types/Rarity";
import type { CraftedItem } from "../../../Types/CraftedItem";

const GlyphEtchedVambraces: CraftedItem = {
  name: "Glyph-Etched Vambraces",
  type: "Bracers, Mail",
  rarity: Rarities.Epic,
  url: 'https://www.wowhead.com/item=219342/glyph-etched-vambraces',
  materials: [
    { ...tww_materials.SPARK, quantity: 1 },
    { ...tww_materials.GloomfathomHide, quantity: 2 },
    { ...tww_materials.GloomChitin, quantity: 150 },
    { ...tww_materials.WrithingHide, quantity: 3 },
    { ...tww_materials.ChitinArmorBanding, quantity: 1 },
  ]
}

const GlyphEtchedGauntlets: CraftedItem = {
  name: "Glyph-Etched Gauntlets",
  type: "Gloves, Mail",
  rarity: Rarities.Epic,
  url: 'https://www.wowhead.com/item=219341/glyph-etched-gauntlets',
  materials: [
    { ...tww_materials.SPARK, quantity: 1 },
    { ...tww_materials.GloomfathomHide, quantity: 1 },
    { ...tww_materials.GloomChitin, quantity: 150 },
    { ...tww_materials.LeyfusedHide, quantity: 3 },
    { ...tww_materials.ChitinArmorBanding, quantity: 1 },
  ]
}

// 11. TWW - Leatherworking
export const Leatherworking = {
    GlyphEtchedVambraces,
    GlyphEtchedGauntlets
}

export default Leatherworking
