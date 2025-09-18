import { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import { Mage } from "../../classes/mage"

export const Snipermagi: Character = {
    name: "Snipermagi",
    realm: Realms.TarrenMill,
    wowclass: Mage,
    professions: {
        tailoring: {
            tww: 66,
            sl: 100,
        },
        enchanting: {
            tww: 53,
            sl: 0
        }
    }
}

export default Snipermagi
