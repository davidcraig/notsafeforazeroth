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
  }

    // SlippersOfTheWovenDusk: {
    //     name: "Slippers of the Woven Dusk",
    //     type: "Gloves, Cloth",
    //     rarity: Rarity.Epic,
    //     url: "https://www.wowhead.com/item=222810/slippers-of-the-woven-dusk",
    //     materials: [
    //         { ...materials.AdorningRibbon, quantity: 5 },
    //         { ...materials.DuskweaveBolt, quantity: 10 },
    //         { ...materials.GleamingShard, quantity: 6 },
    //         { ...materials.SpoolOfDuskthread, quantity: 10 }
    //     ]
    // }
}

export default Leatherworking
