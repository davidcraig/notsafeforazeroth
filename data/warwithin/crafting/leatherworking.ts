import { tww_materials } from "./materials.ts";
import { Rarity } from "@davidcraig/wowdata/Rarity"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"

const GlyphEtchedVambraces: CraftedItem = {
  name: "Glyph-Etched Vambraces",
  type: "Bracers, Mail",
  rarity: Rarity.Epic,
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
  rarity: Rarity.Epic,
  url: 'https://www.wowhead.com/item=219341/glyph-etched-gauntlets',
  materials: [
    { ...tww_materials.SPARK, quantity: 1 },
    { ...tww_materials.GloomfathomHide, quantity: 1 },
    { ...tww_materials.GloomChitin, quantity: 150 },
    { ...tww_materials.LeyfusedHide, quantity: 3 },
    { ...tww_materials.ChitinArmorBanding, quantity: 1 },
  ]
}

const GlyphEtchedBreastplate: CraftedItem = {
  name: "Glyph-Etched Breastplate",
  url: 'https://www.wowhead.com/item=219336/glyph-etched-breastplate',
  rarity: Rarity.Epic,
  type: "Chest, Mail",
  materials: [
    { ...tww_materials.SPARK, quantity: 1 },
    { ...tww_materials.GloomfathomHide, quantity: 2 },
    { ...tww_materials.GloomChitin, quantity: 150 },
    { ...tww_materials.LeyfusedHide, quantity: 3 },
    { ...tww_materials.ChitinArmorBanding, quantity: 1 },
  ]
}

const HideseekersPack: CraftedItem = {
  name: "Hideseeker's Pack",
  url: 'https://www.wowhead.com/item=219862/hideseekers-pack',
  rarity: Rarity.Uncommon,
  type: "Skinning Accessory, Back",
  materials: [
    { ...tww_materials.StormchargedLeather, quantity: 10 },
    { ...tww_materials.ThunderousHide, quantity: 1 },
  ]
}

const HideseekersHat: CraftedItem = {
  name: "Hideseeker's Hat",
  url: 'https://www.wowhead.com/item=219863/hideseekers-hat',
  rarity: Rarity.Uncommon,
  type: "Skinning Accessory, Head",
  materials: [
    { ...tww_materials.StormchargedLeather, quantity: 40 },
    { ...tww_materials.GloomChitin, quantity: 40 },
  ]
}

const HideshapersCover: CraftedItem = {
  name: "Hideshaper's Cover",
  url: 'https://www.wowhead.com/item=219865/hideshapers-cover',
  rarity: Rarity.Uncommon,
  type: "Leatherworking Accessory, Chest",
  materials: [
    { ...tww_materials.StormchargedLeather, quantity: 50 },
    { ...tww_materials.GloomChitin, quantity: 50 },
  ]
}

// 11. TWW - Leatherworking
export const Leatherworking = {
    GlyphEtchedVambraces,
    GlyphEtchedGauntlets,
    GlyphEtchedBreastplate,
    HideseekersPack,
    HideseekersHat,
    HideshapersCover,
}

export default Leatherworking
