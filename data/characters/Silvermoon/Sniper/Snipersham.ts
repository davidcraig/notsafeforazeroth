import type { Character } from "@davidcraig/wowdata/Character";
import { Race } from "@davidcraig/wowdata/Race";
import { Realm } from "@davidcraig/wowdata/Realm";
import Shaman from "@davidcraig/wowdata/classes/shaman";

export const Snipersham: Character = {
  name: "Snipersham",
  realm: Realm.Silvermoon,
  wowclass: Shaman,
  race: Race.KulTiran,
  professions: {
    leatherworking: {
      tww: 53,
      bfa: 3,
      wod: 3,
      wow: 3,
    },
    tailoring: {
      tww: 23,
      bfa: 12,
      wod: 5,
      cata: 74,
      wow: 302,
    },
  },
};

export default Snipersham;
