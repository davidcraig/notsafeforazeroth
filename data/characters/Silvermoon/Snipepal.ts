import { Character } from "../../../Types/Character"
import Paladin from "@davidcraig/wowdata/classes/paladin"
import { Races } from "../../Enum/Races"
import { Realm } from "@davidcraig/wowdata/Realm"

export const Snipepal: Character = {
    name: "Snipepal",
    realm: Realm.Silvermoon,
    wowclass: Paladin,
    race: Races.Draenei,
    professions: {
        jewelcrafting: {
            tww: { skill: 6 },
            wow: { skill: 6 },
        },
    }
}

export default Snipepal
