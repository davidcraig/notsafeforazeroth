import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
import Engineering from "./crafting/engineering"
import Tailoring from "./crafting/tailoring"
import Enchanting from "./crafting/enchanting"

const bs = {
    name: 'Blacksmithing',
    crafters: [
        {
            "name": 'Snipedeath-TarrenMill',
            "class":  { name: 'Death Knight', css: 'deathknight' },
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
            "items": [
                Leatherworking.GlyphEtchedVambraces,
                Leatherworking.GlyphEtchedGauntlets,
            ]
        }
    ],
}

const eng = {
    name: 'Engineering',
    crafters: [
        {
            "name": 'Sniperwar-Silvermoon',
            "class":  { name: 'Warrior', css: 'warrior' },
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
        }
    ]
}

const ench = {
    name: 'Enchanting',
    crafters: [
        {
            "name": "Snipermagi-TarrenMill",
            "class":  { name: 'Mage', css: 'mage' },
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
}