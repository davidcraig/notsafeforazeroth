"use client";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@davidcraig/tailwind-nextjs-tsx";

const showClassLinks = true;

const pages = [
  { name: "Crafting", href: "/crafting" },
  { name: "Professions", href: "/professions" },
  { name: "Roster", href: "/roster" },
];

const wikiPages = [
  {
    name: "War Within",
    pages: [
      {
        name: "Raids",
        pages: [
          { name: "Nerub-ar Palace", href: "/warwithin/raid/nerubarpalace" },
          { name: "Manaforge Omega", href: "/warwithin/raid/manaforge" },
        ],
      },
    ],
  },
  {
    name: "Guides",
    pages: [
      { name: "Profession Equipment", href: "/guides/profession-equipment" },
      { name: "Bags", href: "/guides/bags" },
    ],
  },
];

if (showClassLinks) {
  wikiPages.push({
    name: "Classes",
    pages: [
      {
        name: "Priest",
        href: "/classes/priest",
        className: "fg-priest-important",
      },
      { name: "Mage", href: "/classes/mage", className: "fg-mage-important" },
      {
        name: "Warlock",
        href: "/classes/warlock",
        className: "fg-warlock-important",
      },
      {
        name: "Druid",
        href: "/classes/druid",
        className: "fg-druid-important",
      },
      {
        name: "Rogue",
        href: "/classes/rogue",
        className: "fg-rogue-important",
      },
      { name: "Monk", href: "/classes/monk", className: "fg-monk-important" },
      {
        name: "Demon Hunter",
        href: "/classes/demonhunter",
        className: "fg-demonhunter-important",
      },
      {
        name: "Hunter",
        href: "/classes/hunter",
        className: "fg-hunter-important",
      },
      {
        name: "Shaman",
        href: "/classes/shaman",
        className: "fg-shaman-important",
      },
      {
        name: "Warrior",
        href: "/classes/warrior",
        className: "fg-warrior-important",
      },
      {
        name: "Paladin",
        href: "/classes/paladin",
        className: "fg-paladin-important",
      },
      {
        name: "Death Knight",
        href: "/classes/deathknight",
        className: "fg-deathknight-important",
      },
      {
        name: "Evoker",
        href: "/classes/evoker",
        className: "fg-evoker-important",
      },
    ],
  });
}

export default function NsfaNavbar() {
  const brand = <>&lt;Not Safe for Azeroth&gt;</>;

  return (
    <Navbar
      brand={brand}
      Link={Link}
      useState={useState}
      pages={[...wikiPages, ...pages]}
    />
  );
}
