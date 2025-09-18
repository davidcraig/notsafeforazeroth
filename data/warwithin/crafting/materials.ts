import type { Material } from "../../../Types/Material"
import { Rarities } from "../../../Types/Rarity"

const RingingDeepsIngot: Material = { name: 'Ringing Deeps Ingot', url: 'https://www.wowhead.com/item=221754/ringing-deeps-ingot', rarity: 'rare' }
const SanctifiedAlloy: Material = { name: 'Sanctified Alloy', url: 'https://www.wowhead.com/item=222423/sanctified-alloy', rarity: 'epic' }
const IronclawAlloy: Material = { name: 'Ironclaw Alloy', url: 'https://www.wowhead.com/item=222426/ironclaw-alloy', rarity: "rare" }
const SparkOfStarlight: Material = { name: 'Spark of Starlight', url: 'https://www.wowhead.com/item=231756/spark-of-starlight', rarity: 'epic' }
const GloomfathomHide: Material = { name: 'Gloomfathom Hide', url: 'https://www.wowhead.com/item=221757/gloomfathom-hide', rarity: 'rare' }
const BountifulBolts: Material = { name: 'Bountiful Bolts', url: 'https://www.wowhead.com/item=227769/bountiful-bolts', rarity: 'uncommon' }
const GloomChitin: Material = { name: 'Gloom Chitin', url: 'https://www.wowhead.com/item=212667/gloom-chitin', rarity: 'common' }
const ChitinArmorBanding: Material = { name: 'Chitin Armor Banding', url: 'https://www.wowhead.com/item=219898/chitin-armor-banding', rarity: 'uncommon' }
const WrithingHide: Material = { name: 'Writhing Hide', url: 'https://www.wowhead.com/item=219886/writhing-hide', rarity: 'rare' }
const LeyfusedHide: Material = { name: 'Leyfused Hide', url: 'https://www.wowhead.com/item=219892/leyfused-hide', rarity: 'rare' }
const NascentGildedHarbingerCrest: Material = { name: "Nascent Gilded Harbinger Crest", "url": 'https://www.wowhead.com/item=220789/nascent-gilded-harbinger-crest', rarity: "epic" }
const StormDust: Material = { name: "Storm Dust", url: "https://www.wowhead.com/item=219946/storm-dust", rarity: "common" }
const GleamingShard: Material = { name: "Gleaming Shard", url: "https://www.wowhead.com/item=219949/gleaming-shard", rarity: "rare" }
const RefulgentCrystal: Material = { name: "Refulgent Crystal", url: "https://www.wowhead.com/item=219952/refulgent-crystal", rarity: "epic" }
const AdorningRibbon: Material = { name: "Adorning Ribbon", url: "https://www.wowhead.com/item=228930/adorning-ribbon", rarity: "uncommon" }
const SpoolOfDuskthread: Material = { name: "Spool of Duskthread", url: "https://www.wowhead.com/item=222789/spool-of-duskthread", rarity: "rare" }
const DuskweaveBolt: Material = { name: "Duskweave Bolt", url: "https://www.wowhead.com/item=222798/duskweave-bolt", rarity: "epic" }
const AssortedWhirligigs: Material = { name: "Assorted Whirligigs", url: "https://www.wowhead.com/item=227770/assorted-whirligigs", rarity: "uncommon" }
const BlinkerFluid: Material = { name: "Blinker Fluid", url: "https://www.wowhead.com/item=227771/blinker-fluid", rarity: "rare" }
const CataclysmicConverter: Material = { name: "Cataclysmic Converter", url: "https://www.wowhead.com/item=227772/cataclysmic-converter", rarity: "rare" }
const PummelProofPlating: Material = { name: "Pummel-Proof Plating", url: "https://www.wowhead.com/item=227773/pummel-proof-plating", rarity: "rare" }
const PummelPermit: Material = { name: "Pummel Permit", url: "https://www.wowhead.com/item=227774/pummel-permit", rarity: "epic" }

const SPARK: Material = { name: "Any Spark", url: SparkOfStarlight.url, rarity: Rarities.Epic }

export const tww_materials = {
    GloomfathomHide,
    /* Sparks */
    SparkOfStarlight,
    /* Blacksmithing Materials */
    SanctifiedAlloy,
    IronclawAlloy,
    RingingDeepsIngot,
    /* Engineering */
    BountifulBolts,
    AssortedWhirligigs,
    BlinkerFluid,
    CataclysmicConverter,
    PummelProofPlating,
    PummelPermit,
    /* Leatherworking */
    GloomChitin,
    ChitinArmorBanding,
    WrithingHide,
    LeyfusedHide,
    /* Enchanting */
    NascentGildedHarbingerCrest,
    StormDust,
    GleamingShard,
    RefulgentCrystal,
    /* Tailoring */
    AdorningRibbon,
    SpoolOfDuskthread,
    DuskweaveBolt,
    /* Helper constant */
    SPARK
}

export default tww_materials
