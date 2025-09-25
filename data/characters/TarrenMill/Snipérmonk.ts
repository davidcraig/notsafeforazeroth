import type { Character } from "../../../Types/Character"
import { Races } from "../../Enum/Races"
import { Realm } from "@davidcraig/wowdata/Realm"
import Monk from "@davidcraig/wowdata/classes/monk"

export const Snipérmonk: Character = {
  name: "Snipérmonk",
  realm: Realm.TarrenMill,
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
