import type { Character } from "@davidcraig/wowdata/Character"
import Hunter from "@davidcraig/wowdata/classes/hunter"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Leatherworking as TWW_LW } from "../../warwithin/crafting/leatherworking.ts"

export const Snipá: Character = {
    name: "Snipá",
    realm: Realm.Silvermoon,
    wowclass: Hunter,
    race: Race.Worgen,
    professions: {
        skinning: {
            tww: { skill: 7 },
            df: { skill: 57 },
            wod: { skill: 49 },
            cata: { skill: 6 },
            wow: { skill: 6 },
        },
        leatherworking: {
          tww: {
            skill: 13,
            items: [
              TWW_LW.HideseekersPack
            ]
          },
          df: { skill: 10 },
          wod: { skill: 2 },
          wow: { skill: 1 }
        }
    }
}

export default Snipá
