import { Character } from "../../../Types/Character";
import Evoker from "@davidcraig/wowdata/classes/evoker"
import { Races } from "../../Enum/Races";
import { Realm } from "@davidcraig/wowdata/Realm"

export const Snipevoke: Character = {
  name: "Snipevoke",
  realm: Realm.TarrenMill,
  wowclass: Evoker,
  race: Races.Dracthyr,
  professions: {
    alchemy: {
      tww: {
        skill: 95
      },
      wod: {
        skill: 50,
      },
    },
    herbalism: {
      tww: {
        skill: 69
      }
    }
  }
}

export default Snipevoke
