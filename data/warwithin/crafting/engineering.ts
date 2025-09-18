import materials from "./materials";
import { Rarities } from "../../../Types/Rarity";

// 11. TWW - Engineering
const Engineering = {
    CrowdPummeler230: {
        name: "Crowd Pummeler 2-30",
        type: "Mount",
        rarity: Rarities.Epic,
        url: 'https://www.wowhead.com/item=221967/crowd-pummeler-2-30',
        materials: [
           { ...materials.BountifulBolts, quantity: 1000 },
           { ...materials.AssortedWhirligigs, quantity: 200 },
           { ...materials.BlinkerFluid, quantity: 80 },
           { ...materials.CataclysmicConverter, quantity: 50 },
           { ...materials.PummelProofPlating, quantity: 20 },
           { ...materials.PummelPermit, quantity: 1 }
        ]
    },
}

export default Engineering
