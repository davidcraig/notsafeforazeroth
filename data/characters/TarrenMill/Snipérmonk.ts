import type { Character } from "../../../Types/Character"
import { Races } from "../../Enum/Races"
import { Realms } from "../../Enum/Realms"
import Monk from "../../classes/monk"

export const Snipérmonk: Character = {
  name: "Snipérmonk",
  realm: Realms.TarrenMill,
  race: Races.Goblin,
  wowclass: Monk,
  professions: {
    alchemy: {
      tww: { skill: 6} ,
      wow: { skill: 6 },
    },
    herbalism: {
      wow: { skill: 1 },
    }
  }
}

export default Snipérmonk
