import React, { useState } from "react";
import Link from "next/link";

const externalLinkSvg = (
  <svg
    width={20}
    height={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="#ececec"
      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
    />
  </svg>
);

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

const DetailsLink = ({
  id,
  title,
  children,
  depth,
  openByDepth,
  setOpenByDepth,
}) => {
  const isOpen = openByDepth[depth] === id;
  const handleToggle = (e) => {
    const el = e.currentTarget;
    setOpenByDepth((prev) => {
      const next = { ...prev };
      if (el.open) {
        next[depth] = id;
        // close deeper levels when opening a new branch at this depth
        Object.keys(next).forEach((k) => {
          if (Number(k) > depth) delete next[k];
        });
      } else {
        if (next[depth] === id) delete next[depth];
        Object.keys(next).forEach((k) => {
          if (Number(k) > depth) delete next[k];
        });
      }
      return next;
    });
  };
  return (
    <details
      key={id}
      className={`navbar-item ml-4 nav-details nav-depth-${depth}`}
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary className="navbar-link">{title}</summary>
      <div className="navbar-dropdown">{children}</div>
    </details>
  );
};

function renderNavigationItem(
  item,
  onNavigate,
  openByDepth,
  setOpenByDepth,
  depth = 0,
) {
  if (item.pages) {
    return (
      <DetailsLink
        key={item.name}
        className="pr-2 mr-4 ml-4"
        id={item.name}
        title={item.name}
        depth={depth}
        openByDepth={openByDepth}
        setOpenByDepth={setOpenByDepth}
      >
        {item.pages.map((dropdownPage) => {
          return renderNavigationItem(
            dropdownPage,
            onNavigate,
            openByDepth,
            setOpenByDepth,
            depth + 1,
          );
        })}
      </DetailsLink>
    );
  }
  let itemCssClass = "";
  if (item.wowClassColour) {
    itemCssClass = item.slug.replace("/classes/", "");
    console.log(itemCssClass);
  }
  return (
    <Link
      className={itemCssClass}
      key={item.slug}
      title={item.name}
      href={item.slug}
      onClick={onNavigate}
    >
      {item.name}
    </Link>
  );
}

const externalLink = (href, title) => {
  return (
    <a
      key={href}
      className="ml-4 p-4 md:p-0 flex"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}{" "}
      <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
        {externalLinkSvg}
      </span>
    </a>
  );
};

export default function Navigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openByDepth, setOpenByDepth] = useState({});
  return (
    <nav
      className={`navbar p-4 flex flex-col gap-4 md:flex-row ${props.className}`}
    >
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
        <a className="brand font-bold text-xl shrink-0 mr-4" href="/">
          &lt;Not Safe for Azeroth&gt;
        </a>
        <button
          aria-label="Toggle navigation"
          className="navbar-burger md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span>☰</span>
        </button>
      </div>
      <div
        className={`nav-links w-full gap-4 md:flex-1 md:ml-auto md:justify-end md:items-center text-center ${mobileOpen ? "is-open" : ""}`}
      >
        {wikiPages.map((page) => {
          return renderNavigationItem(
            page,
            () => {
              setMobileOpen(false);
              setOpenByDepth({});
            },
            openByDepth,
            setOpenByDepth,
          );
        })}
        {pages.map((page) => {
          return renderNavigationItem(
            page,
            () => {
              setMobileOpen(false);
              setOpenByDepth({});
            },
            openByDepth,
            setOpenByDepth,
          );
        })}
      </div>
    </nav>
  );
}
