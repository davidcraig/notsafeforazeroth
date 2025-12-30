import type { Character } from "@davidcraig/wowdata/Character";
import Druid from "@davidcraig/wowdata/classes/druid";
import { Realm } from "@davidcraig/wowdata/Realm";
import { Race } from "@davidcraig/wowdata/Race";
import ROLES from "../../../roles.ts";

const MINING_RACIAL_BONUS = 5;

export const Sniperdrood: Character = {
  name: "Sniperdrood",
  realm: Realm.TarrenMill,
  race: Race.HighmountainTauren,
  wowclass: Druid,
  role: [ROLES.Healer, ROLES.DPS],
  professions: {
    herbalism: {
      tww: 100 + 18,
      df: 47,
      sl: 1,
      legion: 30,
      wod: 17,
      mop: 75,
      cata: 18,
      wow: 189,
    },
    mining: {
      tww: 100 + MINING_RACIAL_BONUS + 13,
      df: 35 + MINING_RACIAL_BONUS,
      sl: 6,
      mop: 75 + MINING_RACIAL_BONUS,
      cata: 15,
      wow: 155,
    },
  },
};

export default Sniperdrood;
