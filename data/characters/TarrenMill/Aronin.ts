import type { Character } from "@davidcraig/wowdata/Character"
import Paladin from "@davidcraig/wowdata/classes/paladin"
import { Realm } from "@davidcraig/wowdata/Realm"
import ROLES from "@davidcraig/wowdata/Roles"

export const Aronin: Character = {
  name: "Aronin",
  realm: Realm.TarrenMill,
  role: [ ROLES.Tank, ROLES.DPS ],
  wowclass: Paladin
}

export default Aronin
