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
