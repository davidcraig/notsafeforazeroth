import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
import Engineering from "./crafting/engineering"
import Tailoring from "./crafting/tailoring"
import Enchanting from "./crafting/enchanting"

// Shadowlands Crating

// Blacksmithing
const bs = {
    name: 'Blacksmithing',
    crafters: [
        {
            "name": 'Snipedeath-TarrenMill',
            "class":  { name: 'Death Knight', css: 'deathknight' },
            "skill": { current: 78, cap: 100 },
            "items": [
                Blacksmithing.BeledarsBulwark,
                Blacksmithing.EverforgedVambraces,
                Blacksmithing.EverforgedPauldrons,
                Blacksmithing.EverforgedGauntlets,
            ]
        },
    ],
}

const lw = {
    name: 'Leatherworking',
    crafters: [
        {
            "name": 'Snipá-Magtheridon',
            "class":  { name: 'Hunter', css: 'hunter' },
            "skill": { current: 62, cap: 100 },
            "items": [
                Leatherworking.GlyphEtchedVambraces,
                Leatherworking.GlyphEtchedGauntlets,
            ]
        }
    ],
}

const skinning = {
    name: 'Skinning',
    crafters: [
        {
            "name": 'Snipá-Magtheridon',
            "class":  { name: 'Hunter', css: 'hunter' },
            "skill": { current: 100, cap: 100 },
            "items": []
        }
    ]
}

const mining = {
    name: 'Mining',
    crafters: [
        {
            "name": 'Sniperwar-Silvermoon',
            "class":  { name: 'Warrior', css: 'warrior' },
            "skill": { current: 100, cap: 100 },
            "items": []
        }
    ]
}

const eng = {
    name: 'Engineering',
    crafters: [
        {
            "name": 'Sniperwar-Silvermoon',
            "class":  { name: 'Warrior', css: 'warrior' },
            "skill": { current: 65, cap: 100 },
            "items": [
                Engineering.CrowdPummeler230,
            ]
        }
    ],
}

const tailor = {
    name: 'Tailoring',
    crafters: [
        {
            "name": "Snipermagi-TarrenMill",
            "class":  { name: 'Mage', css: 'mage' },
            "skill": { current: 66, cap: 100 },
            "items": [
                Tailoring.DuskweaveBag,
                Tailoring.GlovesOfTheWovenDusk,
                Tailoring.SlippersOfTheWovenDusk,
            ]
        }
    ]
}

const ench = {
    name: 'Enchanting',
    crafters: [
        {
            "name": "Snipermagi-TarrenMill",
            "class":  { name: 'Mage', css: 'mage' },
            "skill": { current: 53, cap: 100 },
            "items": [
                Enchanting.EnchantedGildedHarbingerCrest
            ]
        }
    ]
}

export default {
    bs,
    lw,
    eng,
    tailor,
    ench,
    skinning,
    mining
}