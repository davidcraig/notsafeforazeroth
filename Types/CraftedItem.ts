import type { Rarity } from "./Rarity"
import type { Material } from "./Material"

type Reagent = Material & { quantity: number }

export type CraftedItem = {
    id?: number
    name: string
    icon?: string
    rarity: Rarity
    type: string
    url?: string
    materials: Reagent[]
}



// BeledarsBulwark: {
//         "name": "Beledar's Bulwark",
//         "type": "Shield",
//         "rarity": "epic",
//         "url": 'https://www.wowhead.com/item=222459/beledars-bulwark',
//         "materials": [
//             { "name": "Any Spark", "quantity": 1, "url": materials.SparkOfStarlight.url },
//             { ...materials.GloomfathomHide, "quantity": 1 },
//             { ...materials.RingingDeepsIngot, "quantity": 1 },
//             { ...materials.SanctifiedAlloy, "quantity": 8 },
//         ]
//     },