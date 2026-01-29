import type { Character } from "@davidcraig/wowdata/Character";
import { Race } from "@davidcraig/wowdata/Race";
import { Realm } from "@davidcraig/wowdata/Realm";
import Warlock from "@davidcraig/wowdata/classes/warlock";

export const Sniperlock: Character = {
  name: "Sniperlock",
  realm: Realm.TarrenMill,
  race: Race.Nightborne,
  wowclass: Warlock,
  professions: {
    inscription: {
      tww: 52,
      legion: 14,
      wod: 92,
      mop: 33,
      cata: 6,
      wow: 144,
    },
  },
};

export default Sniperlock;
