import { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import { Mage } from "../../classes/mage"
import { Tailoring as WW_T } from "../../warwithin/crafting/tailoring"
import Enchanting from "../../warwithin/crafting/enchanting"
import { Tailoring as SL_T } from "../../shadowlands/crafting/tailoring"

export const Snipermagi: Character = {
    name: "Snipermagi",
    realm: Realms.TarrenMill,
    wowclass: Mage,
    professions: {
        tailoring: {
            tww: { skill: 66, items: [
                WW_T.DuskweaveBag,
                WW_T.GlovesOfTheWovenDusk,
                WW_T.SlippersOfTheWovenDusk,
            ] },
            sl: {
              skill: 100,
              items: [
                SL_T.GrimVeiledBelt_Rank1,
                SL_T.GrimVeiledBracers_Rank1,
                SL_T.GrimVeiledCape_Rank1,
                SL_T.GrimVeiledHood_Rank1
              ]
            },
        },
        enchanting: {
            tww: { skill: 53, items: [
                Enchanting.EnchantedGildedHarbingerCrest,
            ] },
            sl: 0
        }
    }
}

export default Snipermagi
