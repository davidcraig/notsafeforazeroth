import React from "react";
import Link from "next/link";
import Page from "../Components/Page.js";
import WoWProfessionSkillBar from "@nsfa/Components/WoWProfessionSkillBar.js";
import { buildCharacterSkillsByExpansion } from "../data/crafting.ts";
import TabbedContent from "@nsfa/Components/TabbedContent.tsx";
import TabbedContentWithKey from "@nsfa/Components/TabbedContentWithKey.js";
import { getReversedExpansions } from "Types/expansions.ts";

const secondarySkills = ["Cooking", "Fishing", "Archaeology"];
const gatheringSkills = ["Mining", "Skinning", "Herbalism"];

const TabWithKey = TabbedContentWithKey(TabbedContent);

function RenderProfessionSectionTable({ rows }) {
  return (
    <table
      className="table is-narrow is-striped border"
      style={{ borderColor: "var(--theme-bg-2)" }}
    >
      <thead>
        <tr className="border" style={{ borderColor: "var(--theme-bg-2)" }}>
          <th>Character</th>
          <th>Realm</th>
          <th>Profession</th>
          <th>Skill</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            <td
              className={`fg-${row.character?.wowclass?.css || row.character?.wowclass?.wowclass?.css}`}
            >
              <Link
                className={`fg-${row.character?.wowclass?.css || row.character?.wowclass?.wowclass?.css}`}
                href={`/characters/${row.character.realm}/${row.character.name}`}
              >
                {row.character.name}
              </Link>
            </td>
            <td>{row.character.realm}</td>
            <td>{row.professionName}</td>
            <td style={{ minWidth: 220 }}>
              <WoWProfessionSkillBar
                skill={row.current || 0}
                cap={row.cap || 100}
                label={null}
                color={row.character?.wowclass?.css || ""}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RenderCharacterProfessionTable(
  ex: { name: string; slug: string; id: number },
  filterText: string,
) {
  const byCharacter = buildCharacterSkillsByExpansion(ex.slug) as any;
  const rows: any[] = [];
  const secondaryRows: any[] = [];
  const gatheringRows: any[] = [];

  Object.values(byCharacter).forEach((entry: any) => {
    const { character, skills } = entry;
    skills.forEach((s: any) => {
      if (secondarySkills.includes(s.professionName)) {
        secondaryRows.push({
          key: `${character.name}-${character.realm}-${s.professionKey}`,
          character,
          professionName: s.professionName,
          current: s.current,
          cap: s.cap,
        });
      } else if (gatheringSkills.includes(s.professionName)) {
        gatheringRows.push({
          key: `${character.name}-${character.realm}-${s.professionKey}`,
          character,
          professionName: s.professionName,
          current: s.current,
          cap: s.cap,
        });
      } else {
        rows.push({
          key: `${character.name}-${character.realm}-${s.professionKey}`,
          character,
          professionName: s.professionName,
          current: s.current,
          cap: s.cap,
        });
      }
    });
  });

  if (rows.length === 0) return null;

  rows.sort((a, b) => {
    const aNameRealm = `${a.character.name}-${a.character.realm}`;
    const bNameRealm = `${b.character.name}-${b.character.realm}`;

    const comp = aNameRealm.localeCompare(bNameRealm);
    if (comp !== 0) return comp;
    return a.professionName.localeCompare(b.professionName);
  });

  const normalized = (filterText || "").trim().toLowerCase();
  const filteredRows = normalized
    ? rows.filter(
        (r) =>
          r.character.name.toLowerCase().includes(normalized) ||
          String(r.character.realm).toLowerCase().includes(normalized) ||
          r.professionName.toLowerCase().includes(normalized),
      )
    : rows;

  return (
    <div key={ex.slug} className="mt-8">
      <h3 className="mb-4 text-xl" style={{ fontWeight: "bold" }}>
        {ex.id}. {ex.name}
      </h3>
      <RenderProfessionSectionTable rows={rows} />

      <h2 className="my-4">Gathering Professions</h2>
      <RenderProfessionSectionTable rows={gatheringRows} />

      <h2 className="my-4">Secondary Professions</h2>
      <RenderProfessionSectionTable rows={secondaryRows} />
    </div>
  );
}

export default function Professions() {
  const [filterText, setFilterText] = React.useState("");

  const onFilterKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.key === "Escape") {
      // Handle Enter key press
      setFilterText("");
    }
  };

  const tabs = [];

  const expansions = getReversedExpansions();

  expansions.map((ex) => {
    const slug = ex.slug.toUpperCase();

    tabs.push({
      id: ex.id,
      title: `${ex.id}. ${slug}`,
      content: RenderCharacterProfessionTable(ex, filterText),
    });
  });

  return (
    <Page title="Professions">
      <h2 className="h2 text-2xl mb-2 flex">
        Guild Professions
        <input
          type="text"
          placeholder="Search"
          className="input ml-auto"
          value={filterText}
          onKeyUp={onFilterKeyUp}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ maxWidth: 420 }}
        />
      </h2>
      <div className="ml-auto"></div>
      <TabWithKey id="professions-expansion-tabs" content={tabs} />
    </Page>
  );
}
