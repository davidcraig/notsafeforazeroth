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
            tww: { skill: 105 },
            df: { skill: 75 },
            wod: { skill: 49 },
            cata: { skill: 6 },
            wow: { skill: 6 },
        }
    }
}

export default Snipá
