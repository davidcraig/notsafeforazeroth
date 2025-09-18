import { Character } from "../../../Types/Character"
import { Druid } from "../../classes/druid"
import { Realms } from "../../Enum/Realms"
import ROLES from "../../roles"

const MINING_RACIAL_BONUS = 5

export const Sniperdrood: Character = {
    name: "Sniperdrood",
    realm: Realms.TarrenMill,
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
