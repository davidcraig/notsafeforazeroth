const SparkOfStarlight = {
    name: 'Spark of Starlight',
    url: 'https://www.wowhead.com/item=231756/spark-of-starlight',
}

const GloomfathomHide = {
    name: 'Gloomfathom Hide',
    url: 'https://www.wowhead.com/item=221757/gloomfathom-hide',
}

const RingingDeepsIngot = {
    name: 'Ringing Deeps Ingot',
    url: 'https://www.wowhead.com/item=221754/ringing-deeps-ingot',
}

const SanctifiedAlloy = {
    name: 'Sanctified Alloy',
    url: 'https://www.wowhead.com/item=222423/sanctified-alloy',
}

const blacksmithing = {
    name: 'Blacksmithing',
    crafters: [
        {
            "name": 'Snipedeath-TarrenMill',
            "class":  { name: 'Death Knight', css: 'deathknight' },
            "items": [
                {
                    "name": "Beledar's Bulwark",
                    "type": "Shield",
                    "rarity": "epic",
                    "url": 'https://www.wowhead.com/spell=450246/beledars-bulwark',
                    "materials": [
                        { "name": "Any Spark", "quantity": 1, "url": SparkOfStarlight.url },
                        { ...GloomfathomHide, "quantity": 1 },
                        { ...RingingDeepsIngot, "quantity": 1 },
                        { ...SanctifiedAlloy, "quantity": 8 },
                    ]
                }
            ]
        },
    ],
}

export default {
    blacksmithing,
}