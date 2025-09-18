import type { Material } from "../../../Types/Material"
import { Rarities } from "../../../Types/Rarity"

const ShroudedCloth: Material = {
    name: 'Shrouded Cloth',
    url: 'https://www.wowhead.com/item=173202/shrouded-cloth',
    rarity: Rarities.Common
}
const EnchantedLightlessSilk: Material = {
    name: 'Enchanted Lightless Silk',
    url: 'https://www.wowhead.com/item=172439/enchanted-lightless-silk',
    rarity: Rarities.Uncommon
}
const OrborealShard: Material = {
    name: 'Orboreal Shard',
    url: 'https://www.wowhead.com/item=178787/orboreal-shard',
    rarity: Rarities.Rare
}

const sl_materials = {
  OrborealShard,
  /* Cloth */
  ShroudedCloth,
  EnchantedLightlessSilk,
}

export default sl_materials
