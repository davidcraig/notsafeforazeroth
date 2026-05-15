import type { Character } from "@davidcraig/wowdata/Character"
import Paladin from "@davidcraig/wowdata/classes/paladin"
import { Race } from "@davidcraig/wowdata/Race"
import { Realm } from "@davidcraig/wowdata/Realm"
import Jewelcrafting from "@nsfa/data/expansions/midnight/crafting/jewelcrafting"

export const Snipepal: Character = {
    name: "Snipepal",
    realm: Realm.Silvermoon,
    wowclass: Paladin,
    race: Race.Draenei,
    professions: {
        jewelcrafting: {
            midnight: {
              skill: 67,
              items: [
                Jewelcrafting.LoaWorshipersBand
              ]
            },
            tww: { skill: 6 },
            wow: { skill: 6 },
        },
    }
}

export default Snipepal
