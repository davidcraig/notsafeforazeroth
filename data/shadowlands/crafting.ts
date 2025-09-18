import Tailoring from "./crafting/tailoring"
import Snipermagi from "../characters/TarrenMill/Snipermagi"

const tailor = {
    name: 'Tailoring',
    crafters: [
        {
            ...Snipermagi,
            "skill": { current: Snipermagi.professions?.tailoring?.sl, cap: 100 },
            "items": [
                Tailoring.GrimVeiledBelt_Rank1,
                Tailoring.GrimVeiledBracers_Rank1,
                Tailoring.GrimVeiledCape_Rank1,
                Tailoring.GrimVeiledHood_Rank1,
            ]
        }
    ]
}

export default {
    tailor,
}
