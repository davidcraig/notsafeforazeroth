import materials from "./crafting/materials"
import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
import Engineering from "./crafting/engineering"

const RingingDeepsIngot = { name: 'Ringing Deeps Ingot', url: 'https://www.wowhead.com/item=221754/ringing-deeps-ingot' }
const SanctifiedAlloy = { name: 'Sanctified Alloy', url: 'https://www.wowhead.com/item=222423/sanctified-alloy' }
const IronclawAlloy = { name: 'Ironclaw Alloy', url: 'https://www.wowhead.com/item=222426/ironclaw-alloy' }

const bs = {
    name: 'Blacksmithing',
    crafters: [
        {
            "name": 'Snipedeath-TarrenMill',
            "class":  { name: 'Death Knight', css: 'deathknight' },
            "items": [
                /* Shield: Beledar's Bulwark */
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
                Leatherworking.GlyphEtchedVambraces
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
                {
                    ...Engineering.CrowdPummeler230
                }
            ]
        }
    ],
}

export default {
    bs,
    lw,
    eng
}