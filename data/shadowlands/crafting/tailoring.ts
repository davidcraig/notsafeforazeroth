import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"
import { Rarity } from "@davidcraig/wowdata/Rarity"
import materials from "./materials.ts";

export const Tailoring: Record<string, CraftedItem> = {
    GrimVeiledBelt_Rank1: {
        name: "Grim-Veiled Belt (Rank 1)",
        type: "Cloth Belt",
        rarity: Rarity.Common,
        materials: [
            { ...materials.ShroudedCloth, quantity: 45 },
            { ...materials.EnchantedLightlessSilk, quantity: 15 },
            { ...materials.OrborealShard, quantity: 10 }
        ]
    },
    GrimVeiledBracers_Rank1: {
        name: "Grim-Veiled Bracers (Rank 1)",
        type: "Cloth Bracers",
        rarity: Rarity.Common,
        url: "https://www.wowhead.com/item=173249/grim-veiled-bracers",
        materials: [
            { ...materials.ShroudedCloth, quantity: 35 },
            { ...materials.EnchantedLightlessSilk, quantity: 10 },
            { ...materials.OrborealShard, quantity: 8 }
        ]
    },
    GrimVeiledCape_Rank1: {
        name: "Grim-Veiled Cape (Rank 1)",
        type: "Cloak",
        rarity: Rarity.Common,
        url: "https://www.wowhead.com/item=173242/grim-veiled-cape",
        materials: [
            { ...materials.ShroudedCloth, quantity: 35 },
            { ...materials.EnchantedLightlessSilk, quantity: 10 },
            { ...materials.OrborealShard, quantity: 8 }
        ]
    },
    GrimVeiledHood_Rank1: {
        name: "Grim-Veiled Hood (Rank 1)",
        type: "Helm, Cloth",
        rarity: Rarity.Common,
        url: "https://www.wowhead.com/item=173245/grim-veiled-hood",
        materials: [
            { ...materials.ShroudedCloth, quantity: 55 },
            { ...materials.EnchantedLightlessSilk, quantity: 20 },
            { ...materials.OrborealShard, quantity: 12 }
        ]
    },
}

export default Tailoring
