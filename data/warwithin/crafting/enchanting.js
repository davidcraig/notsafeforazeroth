import materials from "./materials";

const Enchanting = {
    EnchantedGildedHarbingerCrest: {
        "name": "Enchanted Gilded Harbinger Crest",
        "rarity": "epic",
        "type": "Crafting Reagent",
        "url": "https://www.wowhead.com/item=224073/enchanted-gilded-harbinger-crest",
        "materials": [
            { ...materials.NascentGildedHarbingerCrest, "quantity": 1 },
            { ...materials.StormDust, "quantity": 100 },
            { ...materials.GleamingShard, "quantity": 15 },
            { ...materials.RefulgentCrystal, "quantity": 2 }
        ]
    }

    // GlyphEtchedVambraces: {
    //     "name": "Glyph-Etched Vambraces",
    //     "type": "Bracers, Mail",
    //     "rarity": "epic",
    //     "url": 'https://www.wowhead.com/item=219342/glyph-etched-vambraces',
    //     "materials": [
    //         { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
    //         { ...materials.GloomfathomHide, "quantity": 2 },
    //         { ...materials.GloomChitin, "quantity": 150 },
    //         { ...materials.WrithingHide, "quantity": 3 },
    //         { ...materials.ChitinArmorBanding, "quantity": 1 },
    //     ]
    // },
}

export default Enchanting