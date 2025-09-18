import materials from "./materials";
import { Rarities } from "../../../Types/Rarity";

// 11. TWW - Enchanting
export const Enchanting = {
    EnchantedGildedHarbingerCrest: {
        name: "Enchanted Gilded Harbinger Crest",
        rarity: Rarities.Epic,
        type: "Crafting Reagent",
        url: "https://www.wowhead.com/item=224073/enchanted-gilded-harbinger-crest",
        materials: [
            { ...materials.NascentGildedHarbingerCrest, quantity: 1 },
            { ...materials.StormDust, quantity: 100 },
            { ...materials.GleamingShard, quantity: 15 },
            { ...materials.RefulgentCrystal, quantity: 2 }
        ]
    }
}

export default Enchanting
