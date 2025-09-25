import materials from "./materials.ts";
import { Rarity } from "@davidcraig/wowdata/Rarity"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"

// 11. TWW - Tailoring
export const Tailoring = {
    DuskweaveBag: {
        name: "Duskweave Bag",
        type: "Bag",
        rarity: Rarity.Rare,
        url: "https://www.wowhead.com/item=222856/duskweave-bag",
        materials: [
            { ...materials.AdorningRibbon, quantity: 2 },
            { ...materials.SpoolOfDuskthread, quantity: 30 },
            { ...materials.DuskweaveBolt, quantity: 4 }
        ]
    },
    GlovesOfTheWovenDusk: {
        name: "Gloves of the Woven Dusk",
        type: "Gloves, Cloth",
        rarity: Rarity.Epic,
        url: "https://www.wowhead.com/item=222809/gloves-of-the-woven-dusk",
        materials: [
            { ...materials.AdorningRibbon, quantity: 5 },
            { ...materials.DuskweaveBolt, quantity: 8 },
            { ...materials.GleamingShard, quantity: 6 },
            { ...materials.SpoolOfDuskthread, quantity: 15 }
        ]
    },
    SlippersOfTheWovenDusk: {
        name: "Slippers of the Woven Dusk",
        type: "Gloves, Cloth",
        rarity: Rarity.Epic,
        url: "https://www.wowhead.com/item=222810/slippers-of-the-woven-dusk",
        materials: [
            { ...materials.AdorningRibbon, quantity: 5 },
            { ...materials.DuskweaveBolt, quantity: 10 },
            { ...materials.GleamingShard, quantity: 6 },
            { ...materials.SpoolOfDuskthread, quantity: 10 }
        ]
    }
}

export default Tailoring
