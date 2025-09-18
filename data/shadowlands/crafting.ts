import Tailoring from "./crafting/tailoring"
import Snipermagi from "../characters/TarrenMill/Snipermagi"

const tailor = {
    name: 'Tailoring',
    crafters: [
        {
            ...Snipermagi,
            "skill": { current: Snipermagi.professions?.tailoring?.sl, cap: 100 },
        }
    ]
}

export default {
    tailor,
}
