import type { WoWClass } from "./WoWClass";
import { Realms } from "../data/Enum/Realms";

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
    "classic",
    "tbc",
    "wotlk",
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

// For a single profession, map expansion -> skill value
export type ProfessionProgressByExpansion = Partial<Record<WowExpansionSlug, number>>;

// For a character, map profession -> per-expansion progress
export type CharacterProfessions = Partial<Record<WowProfession, ProfessionProgressByExpansion>>;

export type Character = {
    name: string;
    realm: Realms;
    wowclass: WoWClass;
    professions?: CharacterProfessions;
};