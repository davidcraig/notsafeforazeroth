import Paladin from "@davidcraig/wowdata/classes/paladin"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Character } from "../../../Types/Character.ts"

export const Snipepal: Character = {
    name: "Snipepal",
    realm: Realm.Silvermoon,
    wowclass: Paladin,
    race: Race.Draenei,
    professions: {
        jewelcrafting: {
            tww: { skill: 6 },
            wow: { skill: 6 },
        },
    }
}

export default Snipepal
