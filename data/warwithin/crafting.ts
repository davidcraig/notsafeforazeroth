import Blacksmithing from "./crafting/blacksmithing"
import Leatherworking from "./crafting/leatherworking"
import Engineering from "./crafting/engineering"
import Tailoring from "./crafting/tailoring"
import Enchanting from "./crafting/enchanting"
import Sniperdrood from "../characters/TarrenMill/Sniperdrood"
import Snipedeath from "../characters/TarrenMill/Snipedeath"
import Snipermagi from "../characters/TarrenMill/Snipermagi"
import Sniperwar from "../characters/Silvermoon/Sniperwar"
import Snipá from "../characters/Magtheridon/Snipá"

// War Within Crafting

const TWW_PROFESSION_CAP = 100

// Blacksmithing
const bs = {
  name: 'Blacksmithing',
  crafters: [
    {
      ...Snipedeath,
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
      ...Snipá,
      skill: { current: Snipá?.professions?.leatherworking?.tww, cap: TWW_PROFESSION_CAP },
      items: [
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
      ...Snipá,
      "skill": { current: Snipá?.professions?.skinning?.tww, cap: TWW_PROFESSION_CAP },
      "items": []
    }
  ]
}

const mining = {
  name: 'Mining',
  crafters: [
    {
      ...Sniperwar,
      skill: { current: Sniperwar.professions?.mining?.tww, cap: TWW_PROFESSION_CAP }
    },
    {
      ...Sniperdrood,
      skill: { current: Sniperdrood.professions?.mining?.tww, cap: (TWW_PROFESSION_CAP + 5) } // 5 racial bonus
    }
  ]
}

const eng = {
  name: 'Engineering',
  crafters: [
    {
      ...Sniperwar,
      skill: { current: Sniperwar.professions?.engineering?.tww, cap: TWW_PROFESSION_CAP },
      items: [
        Engineering.CrowdPummeler230,
      ]
    }
  ],
}

const tailor = {
  name: 'Tailoring',
  crafters: [
    {
      ...Snipermagi,
      skill: { current: Snipermagi.professions?.tailoring?.tww, cap: TWW_PROFESSION_CAP },
      items: [
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
      ...Snipermagi,
      skill: { current: Snipermagi.professions?.enchanting?.tww, cap: TWW_PROFESSION_CAP },
      items: [
        Enchanting.EnchantedGildedHarbingerCrest
      ]
    }
  ]
}

const herbalism = {
  name: 'Herbalism',
  crafters: [
    {
      ...Sniperdrood,
      skill: { current: Sniperdrood.professions?.herbalism?.tww, cap: TWW_PROFESSION_CAP },
      "items": []
    }
  ]
}

const cooking = {
  name: 'Cooking',
  crafters: [
    {
      "name": 'Snipá-Magtheridon',
      "class": { name: 'Hunter', css: 'hunter' },
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
