import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
import Engineering from "./crafting/engineering"
import Tailoring from "./crafting/tailoring"
import Enchanting from "./crafting/enchanting"

// War Within Crafting

const TWW_PROFESSION_CAP = 100

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
            "skill": { current: 62, cap: TWW_PROFESSION_CAP },
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
            "skill": { current: 100, cap: TWW_PROFESSION_CAP },
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
      "skill": { current: 100, cap: TWW_PROFESSION_CAP },
      "items": []
    },
    {
      "name": 'Sniperdrood-TarrenMill',
      "class":  { name: 'Druid', css: 'druid' },
      "skill": { current: 118, cap: (TWW_PROFESSION_CAP + 5) }, // 5 racial bonus
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
            "skill": { current: 65, cap: TWW_PROFESSION_CAP },
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
            "skill": { current: 66, cap: TWW_PROFESSION_CAP },
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
            "skill": { current: 53, cap: TWW_PROFESSION_CAP },
            "items": [
                Enchanting.EnchantedGildedHarbingerCrest
            ]
        }
    ]
}

const herbalism = {
  name: 'Herbalism',
  crafters: [
    {
      "name": 'Sniperdrood-TarrenMill',
      "class":  { name: 'Druid', css: 'druid' },
      "skill": { current: 118, cap: TWW_PROFESSION_CAP },
      "items": []
    }
  ]
}

const cooking = {
  name: 'Cooking',
  crafters: [
    {
      "name": 'Snipá-Magtheridon',
      "class":  { name: 'Hunter', css: 'hunter' },
      "skill": { current: 88, cap: TWW_PROFESSION_CAP },
      "items": []
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
    mining,
    herbalism,
    cooking,
}
