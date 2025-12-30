export const EXPANSIONS = {
  wow: {
    id: 1,
    code: "wow",
    slug: "wow",
    name: "WoW",
    levelCap: 60,
  },
  tbc: {
    id: 2,
    code: "tbc",
    slug: "tbc",
    name: "The Burning Crusade",
    levelCap: 70,
  },
  wrath: {
    id: 3,
    code: "wrath",
    slug: "wrath",
    name: "Wrath of the Lich King",
    levelCap: 80,
  },
  cata: {
    id: 4,
    code: "cata",
    slug: "cataclysm",
    name: "Cataclysm",
    levelCap: 85,
  },
  mop: {
    id: 5,
    code: "mop",
    slug: "mop",
    name: "Mists of Pandaria",
    levelCap: 90,
  },
  wod: {
    id: 6,
    code: "wod",
    slug: "wod",
    name: "Warlords of Draenor",
    levelCap: 100,
  },
  legion: {
    id: 7,
    code: "legion",
    slug: "legion",
    name: "Legion",
    levelCap: 110,
  },
  bfa: {
    id: 8,
    code: "bfa",
    slug: "bfa",
    name: "Battle for Azeroth",
    levelCap: 120,
  },
  sl: {
    id: 9,
    code: "sl",
    slug: "sl",
    name: "Shadowlands",
    levelCap: 60, // squish
  },
  df: {
    id: 10,
    code: "df",
    slug: "df",
    name: "Dragonflight",
    levelCap: 70,
  },
  tww: {
    id: 11,
    code: "tww",
    slug: "tww",
    name: "The War Within",
    levelCap: 80,
  },
  // mn: {
  //   id: 12,
  //   code: "mn",
  //   slug: "mn",
  //   name: "Midnight",
  //   levelCap: 90,
  //   visible: false,
  // },
  // tlt: {
  //   id: 13,
  //   code: "tlt",
  //   slug: "tlt",
  //   name: "The Last Titan",
  //   levelCap: 100,
  //   visible: false,
  // },
} as const;

export type ExpansionKey = keyof typeof EXPANSIONS;
export type Expansion = (typeof EXPANSIONS)[ExpansionKey];
export type ExpansionCode = Expansion["code"];
export type ExpansionSlug = Expansion["slug"];

export const getExpansionByCode = (
  code: ExpansionCode,
): Expansion | undefined =>
  Object.values(EXPANSIONS).find((e) => e.code === code);

export const getExpansionBySlug = (
  slug: ExpansionSlug,
): Expansion | undefined =>
  Object.values(EXPANSIONS).find((e) => e.slug === slug);

export const getCurrentExpansion = (): Expansion => EXPANSIONS.tww; // or dynamically determine this

export const getReversedExpansions = () => Object.values(EXPANSIONS).reverse();

export const getExpansionKeys = () =>
  Object.values(EXPANSIONS).map((e) => e.code);

export const getLatestSortedExpansionKeys = () => getExpansionKeys().reverse();
