import { Character } from "../../../Types/Character"
import { Races } from "../../Enum/Races"
import { Realm } from "@davidcraig/wowdata/Realm"
import Warrior from "@davidcraig/wowdata/classes/warrior"
import Engineering from "../../warwithin/crafting/engineering"

export const Sniperwar: Character = {
    name: "Sniperwar",
    realm: Realm.Silvermoon,
    wowclass: Warrior,
    race: Races.Gnome,
    professions: {
      engineering: {
        tww: {
          skill: 71,
          items: [
            Engineering.CrowdPummeler230,
          ]
        },
      },
      mining: {
        tww: 100
      }
    }
}

export default Sniperwar
