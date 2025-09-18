import materials from "./materials";
import { Rarities } from "../../../Types/Rarity";

// 11. TWW - Leatherworking
const Leatherworking = {
    GlyphEtchedVambraces: {
        name: "Glyph-Etched Vambraces",
        type: "Bracers, Mail",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=219342/glyph-etched-vambraces',
        materials: [
            materials.SPARK,
            { ...materials.GloomfathomHide, quantity: 2 },
            { ...materials.GloomChitin, quantity: 150 },
            { ...materials.WrithingHide, quantity: 3 },
            { ...materials.ChitinArmorBanding, quantity: 1 },
        ]
    },
    GlyphEtchedGauntlets: {
        name: "Glyph-Etched Gauntlets",
        type: "Gloves, Mail",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=219341/glyph-etched-gauntlets',
        materials: [
            materials.SPARK,
            { ...materials.GloomfathomHide, quantity: 1 },
            { ...materials.GloomChitin, quantity: 150 },
            { ...materials.LeyfusedHide, quantity: 3 },
            { ...materials.ChitinArmorBanding, quantity: 1 },
        ]
    },
}

export default Leatherworking
