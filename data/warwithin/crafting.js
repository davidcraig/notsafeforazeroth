const blacksmithing = {
    name: 'Blacksmithing',
    crafters: [
        {
            "name": 'Snipedeath',
            "class":  { name: 'Death Knight', css: 'deathknight' },
            "items": [
                {
                    "name": "Beledar's Bulwark",
                    "rarity": "epic",
                    "url": 'https://www.wowhead.com/spell=450246/beledars-bulwark',
                    "materials": [
                        { "name": "Any Spark", "quantity": 1, "url": "https://www.wowhead.com/item=231756/spark-of-starlight" },
                        { "name": "Gloomfathom Hide", "url": 'https://www.wowhead.com/item=221757/gloomfathom-hide', "quantity": 1 },
                        { "name": "Ringing Deeps Ingot", "url": 'https://www.wowhead.com/item=221754/ringing-deeps-ingot', "quantity": 1 },
                        { "name": "Sanctified Alloy", "url": 'https://www.wowhead.com/item=222423/sanctified-alloy', "quantity": 8 },
                    ]
                }
            ]
        },
    ],
}

export default {
    blacksmithing,
}