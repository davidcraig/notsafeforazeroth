import type { Character } from "@davidcraig/wowdata/Character";
import { Race } from "@davidcraig/wowdata/Race";
import { Realm } from "@davidcraig/wowdata/Realm";
import Monk from "@davidcraig/wowdata/classes/monk";

export const Snipérmonk: Character = {
  name: "Snipérmonk",
  realm: Realm.TarrenMill,
  race: Race.Goblin,
  wowclass: Monk,
  professions: {
    alchemy: {
      tww: 6,
      wow: 6,
    },
    herbalism: {
      wow: 1,
    },
  },
};

export default Snipérmonk;
