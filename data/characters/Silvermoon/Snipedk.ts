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
        cata: { skill: 6 },
        wow: { skill: 6 },
      },
      mining: {
        cata: { skill: 6 },
        wow: { skill: 6 }
      }
    }
}

export default Snipedk
