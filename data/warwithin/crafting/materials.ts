import type { Material } from "@davidcraig/wowdata/Material"
import { Rarity } from "@davidcraig/wowdata/Rarity"

const RingingDeepsIngot: Material = { name: 'Ringing Deeps Ingot', url: 'https://www.wowhead.com/item=221754/ringing-deeps-ingot', rarity: Rarity.Rare }
const SanctifiedAlloy: Material = { name: 'Sanctified Alloy', url: 'https://www.wowhead.com/item=222423/sanctified-alloy', rarity: Rarity.Epic }
const IronclawAlloy: Material = { name: 'Ironclaw Alloy', url: 'https://www.wowhead.com/item=222426/ironclaw-alloy', rarity: Rarity.Rare }
const SparkOfStarlight: Material = { name: 'Spark of Starlight', url: 'https://www.wowhead.com/item=231756/spark-of-starlight', rarity: Rarity.Epic }
const GloomfathomHide: Material = { name: 'Gloomfathom Hide', url: 'https://www.wowhead.com/item=221757/gloomfathom-hide', rarity: Rarity.Rare }
const BountifulBolts: Material = { name: 'Bountiful Bolts', url: 'https://www.wowhead.com/item=227769/bountiful-bolts', rarity: Rarity.Uncommon }
const GloomChitin: Material = { name: 'Gloom Chitin', url: 'https://www.wowhead.com/item=212667/gloom-chitin', rarity: Rarity.Common }
const ChitinArmorBanding: Material = { name: 'Chitin Armor Banding', url: 'https://www.wowhead.com/item=219898/chitin-armor-banding', rarity: Rarity.Uncommon }
const WrithingHide: Material = { name: 'Writhing Hide', url: 'https://www.wowhead.com/item=219886/writhing-hide', rarity: Rarity.Rare }
const LeyfusedHide: Material = { name: 'Leyfused Hide', url: 'https://www.wowhead.com/item=219892/leyfused-hide', rarity: Rarity.Rare }
const NascentGildedHarbingerCrest: Material = { name: "Nascent Gilded Harbinger Crest", "url": 'https://www.wowhead.com/item=220789/nascent-gilded-harbinger-crest', rarity: Rarity.Epic }
const StormDust: Material = { name: "Storm Dust", url: "https://www.wowhead.com/item=219946/storm-dust", rarity: Rarity.Common }
const GleamingShard: Material = { name: "Gleaming Shard", url: "https://www.wowhead.com/item=219949/gleaming-shard", rarity: Rarity.Rare }
const RefulgentCrystal: Material = { name: "Refulgent Crystal", url: "https://www.wowhead.com/item=219952/refulgent-crystal", rarity: Rarity.Epic }
const AdorningRibbon: Material = { name: "Adorning Ribbon", url: "https://www.wowhead.com/item=228930/adorning-ribbon", rarity: Rarity.Uncommon }
const SpoolOfDuskthread: Material = { name: "Spool of Duskthread", url: "https://www.wowhead.com/item=222789/spool-of-duskthread", rarity: Rarity.Rare }
const DuskweaveBolt: Material = { name: "Duskweave Bolt", url: "https://www.wowhead.com/item=222798/duskweave-bolt", rarity: Rarity.Epic }
const AssortedWhirligigs: Material = { name: "Assorted Whirligigs", url: "https://www.wowhead.com/item=227770/assorted-whirligigs", rarity: Rarity.Uncommon }
const BlinkerFluid: Material = { name: "Blinker Fluid", url: "https://www.wowhead.com/item=227771/blinker-fluid", rarity: Rarity.Rare }
const CataclysmicConverter: Material = { name: "Cataclysmic Converter", url: "https://www.wowhead.com/item=227772/cataclysmic-converter", rarity: Rarity.Rare }
const PummelProofPlating: Material = { name: "Pummel-Proof Plating", url: "https://www.wowhead.com/item=227773/pummel-proof-plating", rarity: Rarity.Rare }
const PummelPermit: Material = { name: "Pummel Permit", url: "https://www.wowhead.com/item=227774/pummel-permit", rarity: Rarity.Epic }

const SPARK: Material = { name: "Any Spark", url: SparkOfStarlight.url, rarity: Rarity.Epic }

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
