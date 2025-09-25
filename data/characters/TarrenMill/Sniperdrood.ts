import { Character } from "../../../Types/Character"
import { Races } from "../../Enum/Races"
import Druid from "@davidcraig/wowdata/classes/druid"
import { Realm } from "@davidcraig/wowdata/Realm"
import ROLES from "../../roles"

const MINING_RACIAL_BONUS = 5

export const Sniperdrood: Character = {
    name: "Sniperdrood",
    realm: Realm.TarrenMill,
    race: Races.HighmountainTauren,
    wowclass: Druid,
    role: [ ROLES.DPS, ROLES.Healer ],
    professions: {
      herbalism: {
        tww: {
          skill: 100 + 18
        }
      },
      mining: {
        tww: {
          skill: 100 + MINING_RACIAL_BONUS + 13
        },
        df: {
          skill: 35 + MINING_RACIAL_BONUS
        }
      }
    }
}

export default Sniperdrood
