import { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import { Warrior } from "../../classes/warrior"

export const Sniperwar: Character = {
    name: "Sniperwar",
    realm: Realms.Silvermoon,
    wowclass: Warrior,
    professions: {
      engineering: {
        tww: 67,
      },
      mining: {
        tww: 100
      }
    }
}

export default Sniperwar
