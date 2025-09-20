import { Character } from "../../../Types/Character";
import Evoker from "../../classes/evoker";
import { Realms } from "../../Enum/Realms";

export const Snipevoke: Character = {
  name: "Snipevoke",
  realm: Realms.TarrenMill,
  wowclass: Evoker,
  professions: {
    alchemy: {
      tww: {
        skill: 95
      }
    },
    herbalism: {
      tww: {
        skill: 69
      }
    }
  }
}

export default Snipevoke
