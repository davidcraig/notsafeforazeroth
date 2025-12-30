"use client";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@davidcraig/tailwind-nextjs-tsx";

const showClassLinks = true;

const pages = [
  { name: "Crafting", slug: "/crafting" },
  { name: "Professions", slug: "/professions" },
  { name: "Roster", slug: "/roster" },
];

const wikiPages = [
  {
    name: "War Within",
    pages: [
      {
        name: "Raids",
        pages: [
          { name: "Nerub-ar Palace", slug: "/warwithin/raid/nerubarpalace" },
          { name: "Manaforge Omega", slug: "/warwithin/raid/manaforge" },
        ],
      },
    ],
  },
  {
    name: "Guides",
    pages: [
      { name: "Profession Equipment", slug: "/guides/profession-equipment" },
      { name: "Bags", slug: "/guides/bags" },
    ],
  },
];

if (showClassLinks) {
  wikiPages.push({
    name: "Classes",
    pages: [
      { name: "Priest", slug: "/classes/priest", wowClassColour: true },
      { name: "Mage", slug: "/classes/mage", wowClassColour: true },
      { name: "Warlock", slug: "/classes/warlock", wowClassColour: true },
      { name: "Druid", slug: "/classes/druid", wowClassColour: true },
      { name: "Rogue", slug: "/classes/rogue", wowClassColour: true },
      { name: "Monk", slug: "/classes/monk", wowClassColour: true },
      {
        name: "Demon Hunter",
        slug: "/classes/demonhunter",
        wowClassColour: true,
      },
      { name: "Hunter", slug: "/classes/hunter", wowClassColour: true },
      { name: "Shaman", slug: "/classes/shaman", wowClassColour: true },
      { name: "Warrior", slug: "/classes/warrior", wowClassColour: true },
      { name: "Paladin", slug: "/classes/paladin", wowClassColour: true },
      {
        name: "Death Knight",
        slug: "/classes/deathknight",
        wowClassColour: true,
      },
      { name: "Evoker", slug: "/classes/evoker", wowClassColour: true },
    ],
  });
}

wikiPages.push({
  name: "Legacy",
  pages: [
    {
      name: "Shadowlands",
      pages: [
        { name: "Castle Nathria", slug: "/shadowlands/nathria" },
        { name: "FAQ", slug: "/shadowlands/faq" },
      ],
    },
  ],
});

export default function NsfaNavbar(props) {
  return (
    <Navbar
      brand={`<Not Safe for Azeroth>`}
      Link={Link}
      useState={useState}
      pages={[...wikiPages, ...pages]}
    />
  );
}
