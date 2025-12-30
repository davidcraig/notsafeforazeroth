import type { Character } from "@davidcraig/wowdata/Character"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import DemonHunter from "@davidcraig/wowdata/classes/demon-hunter.ts"

export const Sniperdeeh: Character = {
    name: "Sniperdeeh",
    realm: Realm.TarrenMill,
    race: Race.HighmountainTauren,
    wowclass: DemonHunter,
    professions: {
      enchanting: {
        tww: 105,
        df: 6,
        sl: 19,
        legion: 45,
        wod: 70,
        mop: 19,
        wrath: 25,
        tbc: 25,
        wow: 46
      }
    }
}

export default Sniperdeeh
