import materials from "./materials.ts";
import { Rarity } from "@davidcraig/wowdata/Rarity"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"

// 12. Midnight - Leatherworking
export const Leatherworking = {
  RowWalkersDeflectors: {
    name: "Row Walker's Deflectors",
    type: "Bracers, Leather",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=244612/row-walkers-deflectors",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.VoidTemperedLeather, quantity: 140 },
      { ...materials.SindoreiArmorBanding, quantity: 2 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.InfusedScalewovenHide, quantity: 1 },
      { ...materials.SmugglersEnchantedEdge, quantity: 1 },
    ]
  },
  FarstridersBrilliantPlumes: {
    name: "Farstrider's Brilliant Plumes",
    type: "Shoulders, Mail",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=244580/farstriders-brilliant-plumes",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.VoidTemperedLeather, quantity: 75 },
      { ...materials.VoidTemperedScales, quantity: 150 },
      { ...materials.SindoreiArmorBanding, quantity: 2 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.InfusedScalewovenHide, quantity: 1 },
    ]
  },
  FarstridersPlatedBracers: {
    name: "Farstrider's Plated Bracers",
    type: "Bracers, Mail",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=244584/farstriders-plated-bracers",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.VoidTemperedLeather, quantity: 50 },
      { ...materials.VoidTemperedScales, quantity: 100 },
      { ...materials.SindoreiArmorBanding, quantity: 1 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.InfusedScalewovenHide, quantity: 1 },
    ]
  }
}

export default Leatherworking
