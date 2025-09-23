import type { Character } from "../../../Types/Character"
import { Realms } from "../../Enum/Realms"
import Monk from "../../classes/monk"

export const Snipérmonk: Character = {
  name: "Snipérmonk",
  realm: Realms.TarrenMill,
  wowclass: Monk,
  professions: {
    alchemy: {
      wow: { skill: 6 },
    },
    herbalism: {
      wow: { skill: 1 },
    }
  }
}

export default Snipérmonk
