import type { Character } from "@davidcraig/wowdata/Character"
import Hunter from "@davidcraig/wowdata/classes/hunter"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"

import { Leatherworking as TWW_LW } from "../../warwithin/crafting/leatherworking.ts"

export const Snipá: Character = {
  name: "Snipá",
  realm: Realm.Magtheridon,
  race: Race.BloodElf,
  wowclass: Hunter,
  professions: {
    cooking: {
      tww: 88,
      wod: 100,  // Capped
      mop: 75,  // Capped
      cata: 75,  // Capped
      wrath: 75,  // Capped
      tbc: 75,  // Capped
      wow: 300  // Capped
    },
    fishing: {
      tww: 70,
      wod: 100, // Capped
      mop: 75, // Capped
      cata: 75, // Capped
      wrath: 75, // Capped
      tbc: 75, // Capped
      wow: 300 // Capped
    }
  }
}

export default Snipá
