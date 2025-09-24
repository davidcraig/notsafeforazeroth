import { Character } from "../../../Types/Character";
import Evoker from "../../classes/evoker";
import { Races } from "../../Enum/Races";
import { Realms } from "../../Enum/Realms";

export const Snipevoke: Character = {
  name: "Snipevoke",
  realm: Realms.TarrenMill,
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
