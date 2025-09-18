import { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import { Warrior } from "../../classes/warrior"
import Engineering from "../../warwithin/crafting/engineering"

export const Sniperwar: Character = {
    name: "Sniperwar",
    realm: Realms.Silvermoon,
    wowclass: Warrior,
    professions: {
      engineering: {
        tww: { skill: 67, items: [
          Engineering.CrowdPummeler230,
        ] },
      },
      mining: {
        tww: 100
      }
    }
}

export default Sniperwar
