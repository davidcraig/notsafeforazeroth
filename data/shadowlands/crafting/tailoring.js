import materials from "./materials";

const Tailoring = {
    GrimVeiledBelt: {
        "name": "Grim-Veiled Belt",
        "type": "Cloth Belt",
        "rarity": "common",
        "url": "https://www.wowhead.com/item=173248/grim-veiled-belt",
        "materials": [
            { ...materials.ShroudedCloth, "quantity": 45 },
            { ...materials.EnchantedLightlessSilk, "quantity": 15 },
            { ...materials.OrborealShard, "quantity": 10 }
        ]
    },
    GrimVeiledBracers: {
        "name": "Grim-Veiled Bracers",
        "type": "Cloth Bracers",
        "rarity": "common",
        "url": "https://www.wowhead.com/item=173249/grim-veiled-bracers",
        "materials": [
            { ...materials.ShroudedCloth, "quantity": 35 },
            { ...materials.EnchantedLightlessSilk, "quantity": 10 },
            { ...materials.OrborealShard, "quantity": 8 }
        ]
    },
}

export default Tailoring