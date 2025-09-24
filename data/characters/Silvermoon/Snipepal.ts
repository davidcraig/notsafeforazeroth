import { Character } from "../../../Types/Character"
import Paladin from "../../classes/paladin"
import { Races } from "../../Enum/Races"
import { Realms } from "../../Enum/Realms"

export const Snipepal: Character = {
    name: "Snipepal",
    realm: Realms.Silvermoon,
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
