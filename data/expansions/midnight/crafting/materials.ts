import type { Material } from "@davidcraig/wowdata/Material"
import { Rarity } from "@davidcraig/wowdata/Rarity"

const SparkOfRadiance: Material = { name: 'Spark of Radiance', url: 'https://www.wowhead.com/item=232875/spark-of-radiance', rarity: Rarity.Epic }

// Jewelcrafting
const KaleidoscopicPrism: Material = { name: 'Kaleidoscopic Prism', url: 'https://www.wowhead.com/item=240974/kaleidoscopic-prism', rarity: Rarity.Rare }
const DuskshroudedStone: Material = { name: 'Duskshrouded Stone', url: 'https://www.wowhead.com/item=242788/duskshrouded-stone', rarity: Rarity.Common }
const FlawlessAmaniLapis: Material = { name: 'Flawless Amani Lapis', url: 'https://www.wowhead.com/item=242612/flawless-amani-lapis', rarity: Rarity.Rare }

// Herbs

// Engineering

// Ingots / Alloys (Blacksmithing)

// Cloth / Spools / Thread

// Leather / Hides
const InfusedScalewovenHide: Material = { name: 'Infused Scalewoven Hide', url: 'https://www.wowhead.com/item=244633/infused-scalewoven-hide', rarity: Rarity.Rare }
const VoidTemperedLeather: Material = { name: 'Void-Tempered Leather', url: 'https://www.wowhead.com/item=238511/void-tempered-leather', rarity: Rarity.Common }
const VoidTemperedScales: Material = { name: 'Void-Tempered Scales', url: 'https://www.wowhead.com/item=238513/void-tempered-scales', rarity: Rarity.Common }
const SindoreiArmorBanding: Material = { name: "Sin'dorei Armor Banding", url: 'https://www.wowhead.com/item=244635/sindorei-armor-banding', rarity: Rarity.Uncommon }

// Enchanting?
const SmugglersEnchantedEdge: Material = { name: "Smuggler's Enchanted Edge", url: 'https://www.wowhead.com/item=243737/smugglers-enchanted-edge', rarity: Rarity.Uncommon }

// Misc
const TormentedTantalum: Material = { name: 'Tormented Tantalum', url: 'https://www.wowhead.com/item=251283/tormented-tantalum', rarity: Rarity.Rare }
const MoteOfWildMagic: Material = { name: 'Mote of Wild Magic', url: 'https://www.wowhead.com/item=236951/mote-of-wild-magic', rarity: Rarity.Rare }

const SPARK: Material = { name: "Any Spark", url: SparkOfRadiance.url, rarity: Rarity.Epic }

export const midnight_materials = {
    /* Helper constant */
    SPARK,
    // Reagent
    TormentedTantalum,
    MoteOfWildMagic,

    // Leather / Scales / Hides
    InfusedScalewovenHide,
    VoidTemperedLeather,
    VoidTemperedScales,
    SindoreiArmorBanding,

    // Enchanting?
    SmugglersEnchantedEdge,

    // Jewelcrafting
    KaleidoscopicPrism,
    DuskshroudedStone,
    FlawlessAmaniLapis,
}

export default midnight_materials
