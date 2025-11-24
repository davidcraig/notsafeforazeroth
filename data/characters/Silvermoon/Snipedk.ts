import type { Character } from "@davidcraig/wowdata/Character"
import DeathKnight from "@davidcraig/wowdata/classes/death-knight.ts"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import { Blacksmithing as TWW_BS } from "../../warwithin/crafting/blacksmithing.ts"

export const Snipedk: Character = {
    name: "Snipedk",
    realm: Realm.Silvermoon,
    wowclass: DeathKnight,
    race: Race.DarkIronDwarf,
    professions: {
      blacksmithing: {
        tww: {
          skill: 6,
          items: [
            TWW_BS.ProficientSickle
          ]
        },
        legion: { skill: 6 },
        cata: { skill: 6 },
        wow: { skill: 37 },
      },
      mining: {
        tww: { skill: 6 },
        legion: { skill: 1 },
        cata: { skill: 1 },
        wow: { skill: 46 }
      }
    }
}

export default Snipedk
