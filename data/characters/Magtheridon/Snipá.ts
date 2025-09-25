import type { Character } from "@davidcraig/wowdata/Character"
import Hunter from "@davidcraig/wowdata/classes/hunter"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"

import { Leatherworking as TWW_LW } from "../../warwithin/crafting/leatherworking.ts"

export const Snipá: Character = {
    name: "Snipá",
    realm: Realm.Magtheridon,
    race: Race.BloodElf,
    wowclass: Hunter,
    professions: {
        skinning: {
            tww: {
              skill: 100
            }
        },
        leatherworking: {
          tww: {
            skill: 62,
            items: [
              TWW_LW.GlyphEtchedGauntlets,
              TWW_LW.GlyphEtchedVambraces,
              TWW_LW.GlyphEtchedBreastplate,
            ]
          },
          // https://www.wow-professions.com/guides/legion-leatherworking-leveling
          legion: { skill: 65 },
          // https://www.wow-professions.com/guides/draenor-leatherworking-leveling
          wod: { skill: 38 },
          wow: { skill: 1, }
        },
        cooking: {
          tww: {
            skill: 88
          },
          wod: { skill: 100 },  // Capped
          mop: { skill: 75 },  // Capped
          cata: { skill: 75 },  // Capped
          wrath: { skill: 75 },  // Capped
          tbc: { skill: 75 },  // Capped
          wow: { skill: 300 }  // Capped
        },
        fishing: {
          tww: {
            skill: 70,
          },
          wod: { skill: 100 }, // Capped
          mop: { skill: 75 }, // Capped
          cata: { skill: 75 }, // Capped
          wrath: { skill: 75 }, // Capped
          tbc: { skill: 75 }, // Capped
          wow: { skill: 300 } // Capped
        }
    }
}

export default Snipá
