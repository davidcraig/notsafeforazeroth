import { Character } from "../../../Types/Character"
import { Hunter } from "../../classes/hunter"
import { Realms } from "../../Enum/Realms"
import { Leatherworking as TWW_LW } from "../../warwithin/crafting/leatherworking"

export const Snipá: Character = {
    name: "Snipá",
    realm: Realms.Magtheridon,
    wowclass: Hunter,
    professions: {
        skinning: {
            tww: 100
        },
        leatherworking: {
          tww: {
            skill: 62,
            items: [
              TWW_LW.GlyphEtchedGauntlets,
              TWW_LW.GlyphEtchedVambraces
            ]
          }
        },
        cooking: {
          tww: {
            skill: 88
          },
          wod: { skill: 100 },
          mop: { skill: 75 },
          cata: { skill: 75 },
          wrath: { skill: 75 },
          tbc: { skill: 75 },
          wow: { skill: 300 }
        },
        fishing: {
          tww: {
            skill: 70,
          },
          wod: { skill: 100 },
          mop: { skill: 75 },
          cata: { skill: 75 },
          wrath: { skill: 75 },
          tbc: { skill: 75 },
          wow: { skill: 300 }
        }
    }
}

export default Snipá
