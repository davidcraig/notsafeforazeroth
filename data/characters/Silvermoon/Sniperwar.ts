import type { Character } from "@davidcraig/wowdata/Character"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import Warrior from "@davidcraig/wowdata/classes/warrior"
import Engineering from "../../warwithin/crafting/engineering.ts"

export const Sniperwar: Character = {
    name: "Sniperwar",
    realm: Realm.Silvermoon,
    wowclass: Warrior,
    race: Race.Gnome,
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
