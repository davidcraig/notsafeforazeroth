import materials from "./materials";

const Tailoring = {
    DuskweaveBag: {
        "name": "Duskweave Bag",
        "type": "Bag",
        "rarity": "rare",
        "url": "https://www.wowhead.com/item=222856/duskweave-bag",
        "materials": [
            { ...materials.AdorningRibbon, "quantity": 2 },
            { ...materials.SpoolOfDuskthread, "quantity": 30 },
            { ...materials.DuskweaveBolt, "quantity": 4 }
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

export default Tailoring