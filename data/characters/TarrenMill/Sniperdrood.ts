import type { Character } from "@davidcraig/wowdata/Character"
import Druid from "@davidcraig/wowdata/classes/druid"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Race } from "@davidcraig/wowdata/Race"
import ROLES from "../../roles.ts"

const MINING_RACIAL_BONUS = 5

export const Sniperdrood: Character = {
    name: "Sniperdrood",
    realm: Realm.TarrenMill,
    race: Race.HighmountainTauren,
    wowclass: Druid,
    role: [ ROLES.Healer, ROLES.DPS ],
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
