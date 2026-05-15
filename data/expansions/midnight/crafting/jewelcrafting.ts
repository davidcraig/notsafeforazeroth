import materials from "./materials.ts";
import { Rarity } from "@davidcraig/wowdata/Rarity"
import type { CraftedItem } from "@davidcraig/wowdata/CraftedItem"

// 12. Midnight - Leatherworking
export const Jewelcrafting = {
  LoaWorshipersBand: {
    name: "Loa Worshiper's Band",
    type: "Jewelry, Ring",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=251513/loa-worshipers-band",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.MoteOfWildMagic, quantity: 20 },
      { ...materials.KaleidoscopicPrism, quantity: 1 },
      { ...materials.DuskshroudedStone, quantity: 5 },
      { ...materials.FlawlessAmaniLapis, quantity: 1 },
    ]
  },
  MasterworkSindoreiBand: {
    name: "Masterwork Sin'dorei Band",
    type: "Jewelry, Ring",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=240949/masterwork-sindorei-band",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.KaleidoscopicPrism, quantity: 1 },
      { ...materials.DuskshroudedStone, quantity: 3 },
      { ...materials.GlimmeringGemdust, quantity: 5 }
    ]
  },
  SignetOfAzerothianBlessings: {
    name: "Signet of Azerothian Blessings",
    type: "Jewelry, Ring",
    rarity: Rarity.Epic,
    url: "https://www.wowhead.com/item=241140/signet-of-azerothian-blessings",
    materials: [
      { ...materials.SPARK, quantity: 2 },
      { ...materials.TormentedTantalum, quantity: 1 },
      { ...materials.MoteOfPrimalEnergy, quantity: 20 },
      { ...materials.KaleidoscopicPrism, quantity: 1 },
      { ...materials.DuskshroudedStone, quantity: 5 },
      { ...materials.FlawlessHarandarPeridot, quantity: 1 },
    ]
  },
}

export default Jewelcrafting
