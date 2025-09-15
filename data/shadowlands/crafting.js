import Tailoring from "./crafting/tailoring"

const tailor = {
    name: 'Tailoring',
    crafters: [
        {
            "name": "Snipermagi-TarrenMill",
            "class":  { name: 'Mage', css: 'mage' },
            "items": [
                Tailoring.GrimVeiledBelt,
                Tailoring.GrimVeiledBracers,
            ]
        }
    ]
}

export default {
    tailor,
}