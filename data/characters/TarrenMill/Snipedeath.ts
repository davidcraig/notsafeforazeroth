import { Character } from "../../../Types/Character"
import { Races } from "../../Enum/Races"

import { Realm } from "@davidcraig/wowdata/Realm"
import DeathKnight from "@davidcraig/wowdata/classes/death-knight"
import { Blacksmithing as WW_BS } from "../../warwithin/crafting/blacksmithing"

export const Snipedeath: Character = {
    name: "Snipedeath",
    realm: Realm.TarrenMill,
    race: Races.HighmountainTauren,
    wowclass: DeathKnight,
    professions: {
      blacksmithing: {
        tww: {
          skill: 78,
          items: [
            WW_BS.BeledarsBulwark,
            WW_BS.EverforgedVambraces,
            WW_BS.EverforgedGauntlets,
            WW_BS.EverforgedPauldrons,
          ]
        }
      }
    }
}

export default Snipedeath
