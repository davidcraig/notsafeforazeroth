import type { WoWClass } from "./WoWClass";
import type { CraftedItem } from "./CraftedItem";
import { Realms } from "../data/Enum/Realms";
import { Role } from "../data/roles";

// Canonical list of WoW professions
export const WOW_PROFESSIONS = [
    "alchemy",
    "blacksmithing",
    "enchanting",
    "engineering",
    "inscription",
    "jewelcrafting",
    "leatherworking",
    "tailoring",
    "skinning",
    "herbalism",
    "mining",
    "cooking",
    "fishing",
] as const;

export type WowProfession = typeof WOW_PROFESSIONS[number];

// Expansion slugs keyed the same way other parts of the app refer to them
export const WOW_EXPANSIONS = [
    "wow",
    "tbc",
    "wrath",
    "cata",
    "mop",
    "wod",
    "legion",
    "bfa",
    "sl",
    "df",
    "tww",
] as const;

export type WowExpansionSlug = typeof WOW_EXPANSIONS[number];

// Per-expansion profession progress can be a simple skill number (backward compatible)
// or an object including the skill and an optional list of crafted items
export type ProfessionProgress = {
    skill: number;
    items?: CraftedItem[];
    cap?: number; // optional per-character cap override
};

// For a single profession, map expansion -> progress value
export type ProfessionProgressByExpansion = Partial<Record<WowExpansionSlug, number | ProfessionProgress>>;

// For a character, map profession -> per-expansion progress
export type CharacterProfessions = Partial<Record<WowProfession, ProfessionProgressByExpansion>>;

export type Character = {
    name: string;
    realm: Realms;
    wowclass: WoWClass;
    professions?: CharacterProfessions;
    role?: Role[];
};
