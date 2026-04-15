import type { Character } from "@davidcraig/wowdata/Character";
import { Race } from "@davidcraig/wowdata/Race";
import { Realm } from "@davidcraig/wowdata/Realm";
import Shaman from "@davidcraig/wowdata/classes/shaman";
import MN_LW from '../../../expansions/midnight/crafting/leatherworking'
import MN_T from '../../../expansions/midnight/crafting/tailoring'

export const Snipersham: Character = {
  name: "Snipersham",
  realm: Realm.Silvermoon,
  wowclass: Shaman,
  race: Race.KulTiran,
  professions: {
    leatherworking: {
      midnight: {
        skill: 64,
        items: [
          MN_LW.RowWalkersDeflectors
        ]
      },
      tww: 53,
      df: 3,
      sl: 3,
      bfa: 4,
      wod: 3,
      wrath: 4,
      tbc: 3,
      wow: 3,
    },
    tailoring: {
      midnight: 54,
      tww: 23,
      df: 3,
      sl: 3,
      legion: 3,
      bfa: 12,
      wod: 5,
      cata: 77, // Capped
      wrath: 43,
      tbc: 77,
      wow: 302,
    },
  },
};

export default Snipersham;
