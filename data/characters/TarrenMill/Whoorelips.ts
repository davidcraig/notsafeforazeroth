import type { Character } from "@davidcraig/wowdata/Character"
import { Realm } from "@davidcraig/wowdata/Realm"
import ROLES from "@davidcraig/wowdata/Roles"
import Hunter from "@davidcraig/wowdata/classes/hunter"

export const Whoorelips: Character = {
  name: "Whoorelips",
  realm: Realm.TarrenMill,
  role: [ ROLES.DPS ],
  wowclass: Hunter
}

export default Whoorelips
