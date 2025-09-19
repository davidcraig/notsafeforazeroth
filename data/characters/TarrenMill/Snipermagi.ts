import { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import { Mage } from "../../classes/mage"
import { Tailoring as WW_T } from "../../warwithin/crafting/tailoring"
import { Enchanting as WW_E } from "../../warwithin/crafting/enchanting"
import { Tailoring as SL_T } from "../../shadowlands/crafting/tailoring"

export const Snipermagi: Character = {
  name: "Snipermagi",
  realm: Realms.TarrenMill,
  wowclass: Mage,
  professions: {
    tailoring: {
      tww: {
        skill: 66, items: [
          WW_T.DuskweaveBag,
          WW_T.GlovesOfTheWovenDusk,
          WW_T.SlippersOfTheWovenDusk,
        ]
      },
      df: {
        skill: 35,
        items: [],
      },
      sl: {
        skill: 100,
        items: [
          SL_T.GrimVeiledBelt_Rank1,
          SL_T.GrimVeiledBracers_Rank1,
          SL_T.GrimVeiledCape_Rank1,
          SL_T.GrimVeiledHood_Rank1
        ]
      },
      bfa: { skill: 43 },
      legion: { skill: 27 },
      wod: { skill: 30 },
      mop: { skill: 75 },
      cata: { skill: 75 },
      wrath: { skill: 75 },
      tbc: { skill: 75 },
      wow: { skill: 300 }
    },
    enchanting: {
      tww: {
        skill: 53,
        items: [
          WW_E.EnchantedGildedHarbingerCrest,
        ]
      },
      df: {
        skill: 28
      },
      sl: {
        skill: 115
      },
      bfa: { skill: 65 },
      legion: { skill: 30 },
      wod: { skill: 100 },
      mop: { skill: 75 },
      cata: { skill: 30 },
      wrath: { skill: 18 },
      tbc: { skill: 21 },
      wow: { skill: 92 }
    }
  }
}

export default Snipermagi
