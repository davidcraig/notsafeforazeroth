import materials from "./materials";
import { Rarities } from "../../../Types/Rarity";

// 11. TWW - Blacksmithing
const Blacksmithing = {
    BeledarsBulwark: {
        name: "Beledar's Bulwark",
        type: "Shield",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=222459/beledars-bulwark',
        materials: [
            materials.SPARK,
            { ...materials.GloomfathomHide, quantity: 1 },
            { ...materials.RingingDeepsIngot, quantity: 1 },
            { ...materials.SanctifiedAlloy, quantity: 8 },
        ]
    },
    EverforgedPauldrons: {
        name: "Everforged Pauldrons",
        type: "Shoulder, Plate",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=222436/everforged-pauldrons',
        materials: [
            materials.SPARK,
            { ...materials.SanctifiedAlloy, quantity: 6 },
            { ...materials.IronclawAlloy, quantity: 8 }
        ]
    },
    EverforgedVambraces: {
        name: "Everforged Vambraces",
        type: "Bracers, Plate",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=222435/everforged-vambraces',
        materials: [
            materials.SPARK,
            { ...materials.SanctifiedAlloy, quantity: 4 },
            { ...materials.IronclawAlloy, quantity: 12 }
        ]
    },
    EverforgedGauntlets: {
        name: "Everforged Gauntlets",
        type: "Gloves, Plate",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=222437/everforged-gauntlets',
        materials: [
            materials.SPARK,
            { ...materials.SanctifiedAlloy, quantity: 6 },
            { ...materials.IronclawAlloy, quantity: 12 }
        ]
    },
}

export default Blacksmithing
