import materials from "./materials";

// 11. TWW - Leatherworking
const Leatherworking = {
    GlyphEtchedVambraces: {
        "name": "Glyph-Etched Vambraces",
        "type": "Bracers, Mail",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/item=219342/glyph-etched-vambraces',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.GloomfathomHide, "quantity": 2 },
            { ...materials.GloomChitin, "quantity": 150 },
            { ...materials.WrithingHide, "quantity": 3 },
            { ...materials.ChitinArmorBanding, "quantity": 1 },
        ]
    },
    GlyphEtchedGauntlets: {
        "name": "Glyph-Etched Gauntlets",
        "type": "Gloves, Mail",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/item=219341/glyph-etched-gauntlets',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.GloomfathomHide, "quantity": 1 },
            { ...materials.GloomChitin, "quantity": 150 },
            { ...materials.LeyfusedHide, "quantity": 3 },
            { ...materials.ChitinArmorBanding, "quantity": 1 },
        ]
    },
}

export default Leatherworking