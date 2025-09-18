import { Character } from "../../../Types/Character"
import { DeathKnight } from "../../classes/dk"
import { Realms } from "../../Enum/Realms"
import { Blacksmithing as WW_BS } from "../../warwithin/crafting/blacksmithing"

export const Snipedeath: Character = {
    name: "Snipedeath",
    realm: Realms.TarrenMill,
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
