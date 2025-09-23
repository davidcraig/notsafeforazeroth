import { Character } from "../../../Types/Character"
import { Hunter } from "../../classes/hunter"
import { Races } from "../../Enum/Races"
import { Realms } from "../../Enum/Realms"
import { Leatherworking as TWW_LW } from "../../warwithin/crafting/leatherworking"

export const Snipá: Character = {
    name: "Snipá",
    realm: Realms.Silvermoon,
    wowclass: Hunter,
    race: Races.Worgen,
    professions: {
        skinning: {
            df: { skill: 57 },
            wod: { skill: 49 },
            cata: { skill: 6 },
            wow: { skill: 6 },
        },
        leatherworking: {
          df: { skill: 10 },
          wod: { skill: 2 },
          wow: { skill: 1 }
        }
    }
}

export default Snipá
