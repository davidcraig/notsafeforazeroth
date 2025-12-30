import type { Character } from "@davidcraig/wowdata/Character";
import { Race } from "@davidcraig/wowdata/Race";
import { Realm } from "@davidcraig/wowdata/Realm";
import DeathKnight from "@davidcraig/wowdata/classes/death-knight";
import { Blacksmithing as WW_BS } from "../../../warwithin/crafting/blacksmithing.ts";

export const Snipedeath: Character = {
  name: "Snipedeath",
  realm: Realm.TarrenMill,
  race: Race.HighmountainTauren,
  wowclass: DeathKnight,
};

export default Snipedeath;
