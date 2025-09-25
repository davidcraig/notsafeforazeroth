import Evoker from "@davidcraig/wowdata/classes/evoker"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Character } from "../../../Types/Character.ts";

export const Snipevoke: Character = {
  name: "Snipevoke",
  realm: Realm.TarrenMill,
  wowclass: Evoker,
  race: Race.Dracthyr,
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
