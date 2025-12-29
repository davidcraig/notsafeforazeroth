import type { Character } from "@davidcraig/wowdata/Character"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import DeathKnight from "@davidcraig/wowdata/classes/death-knight"
import { Blacksmithing as WW_BS } from "../../warwithin/crafting/blacksmithing.ts"

export const Sniperdeeh: Character = {
    name: "Sniperdeeh",
    realm: Realm.TarrenMill,
    race: Race.HighmountainTauren,
    wowclass: DeathKnight,
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
