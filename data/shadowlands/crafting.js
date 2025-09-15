import Tailoring from "./crafting/tailoring"

const tailor = {
    name: 'Tailoring',
    crafters: [
        {
            "name": "Snipermagi-TarrenMill",
            "class":  { name: 'Mage', css: 'mage' },
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