import { Character } from "../../../Types/Character"
import { Druid } from "../../classes/druid"
import { Realms } from "../../Enum/Realms"

const MINING_RACIAL_BONUS = 5

export const Sniperdrood: Character = {
    name: "Sniperdrood",
    realm: Realms.TarrenMill,
    wowclass: Druid,
    professions: {
      herbalism: {
        tww: 100 + 18
      },
      mining:{
        tww: 100 + MINING_RACIAL_BONUS + 13
      }
    }
}

export default Sniperdrood