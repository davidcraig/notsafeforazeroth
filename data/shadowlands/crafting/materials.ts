import type { Material } from "@davidcraig/wowdata/Material"
import { Rarity } from "@davidcraig/wowdata/Rarity"

const ShroudedCloth: Material = {
    name: 'Shrouded Cloth',
    url: 'https://www.wowhead.com/item=173202/shrouded-cloth',
    rarity: Rarity.Common
}
const EnchantedLightlessSilk: Material = {
    name: 'Enchanted Lightless Silk',
    url: 'https://www.wowhead.com/item=172439/enchanted-lightless-silk',
    rarity: Rarity.Uncommon
}
const OrborealShard: Material = {
    name: 'Orboreal Shard',
    url: 'https://www.wowhead.com/item=178787/orboreal-shard',
    rarity: Rarity.Rare
}

const sl_materials = {
  OrborealShard,
  /* Cloth */
  ShroudedCloth,
  EnchantedLightlessSilk,
}

export default sl_materials
