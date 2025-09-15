import materials from "./materials";

const Blacksmithing = {
    BeledarsBulwark: {
        "name": "Beledar's Bulwark",
        "type": "Shield",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/spell=450246/beledars-bulwark',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.GloomfathomHide, "quantity": 1 },
            { ...materials.RingingDeepsIngot, "quantity": 1 },
            { ...materials.SanctifiedAlloy, "quantity": 8 },
        ]
    },
    EverforgedPauldrons: {
        "name": "Everforged Pauldrons",
        "type": "Shoulder, Plate",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/item=222436/everforged-pauldrons',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.SanctifiedAlloy, "quantity": 6 },
            { ...materials.IronclawAlloy, "quantity": 8 }
        ]
    },
    EverforgedVambraces: {
        "name": "Everforged Vambraces",
        "type": "Bracers, Plate",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/item=222435/everforged-vambraces',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.SanctifiedAlloy, "quantity": 4 },
            { ...materials.IronclawAlloy, "quantity": 12 }
        ]
    },
    EverforgedGauntlets: {
        "name": "Everforged Gauntlets",
        "type": "Bracers, Plate",
        "rarity": "epic",
        "url": 'https://www.wowhead.com/item=222437/everforged-gauntlets',
        "materials": [
            { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
            { ...materials.SanctifiedAlloy, "quantity": 6 },
            { ...materials.IronclawAlloy, "quantity": 12 }
        ]
    },
}

export default Blacksmithing