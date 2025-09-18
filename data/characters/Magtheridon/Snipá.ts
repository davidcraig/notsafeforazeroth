import { Character } from "../../../Types/Character"
import { Hunter } from "../../classes/hunter"
import { Realms } from "../../Enum/Realms"

export const Snipá: Character = {
    name: "Snipá",
    realm: Realms.Magtheridon,
    wowclass: Hunter,
    professions: {
        skinning: {
            tww: 100
        },
        leatherworking: {
            tww: 62
        }
    }
}

export default Snipá