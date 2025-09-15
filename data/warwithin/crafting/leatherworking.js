import materials from "./materials";

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
}

export default Leatherworking