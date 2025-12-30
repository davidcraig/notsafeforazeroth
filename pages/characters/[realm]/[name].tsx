import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Page from "@nsfa/Components/Page";
import WoWProfessionSkillBar from "@nsfa/Components/WoWProfessionSkillBar.js";
import { getLatestSortedExpansionKeys } from "Types/expansions";
import ucFirst from "Functions/ucFirst";
import { SKILL_CAPS } from "@nsfa/data/crafting";

const buildProfessionData = (characterData) => {
  if (!characterData || !characterData.professions) return null;
  const professionRows = [];
  const expKeys = getLatestSortedExpansionKeys();

  professionRows.push(
    <tr>
      <th>Profession</th>
      {Object.values(expKeys).map((expKey) => {
        return <th>{expKey.toLocaleUpperCase()}</th>;
      })}
    </tr>,
  );

  {
    Object.keys(characterData?.professions).forEach((profession) => {
      professionRows.push(
        <tr>
          <td>{ucFirst(profession)}</td>
          {Object.values(expKeys).map((expKey) => {
            if (!characterData.professions[profession][expKey])
              return <td>-</td>;
            return (
              <td>
                <WoWProfessionSkillBar
                  skill={
                    characterData.professions[profession][expKey]?.skill ||
                    characterData.professions[profession][expKey] ||
                    0
                  }
                  cap={
                    SKILL_CAPS[expKey][profession] ||
                    SKILL_CAPS[expKey].default ||
                    100
                  }
                  label={null}
                  color={characterData?.wowclass?.css || ""}
                />
              </td>
            );
          })}
          <td></td>
        </tr>,
      );
    });
  }

  return professionRows;
};

const tryImportCharacter = async (realm, character) => {
  try {
    const module = await import(
      `../../../data/characters/${realm}/${character}.ts`
    );
    return module.default;
  } catch (error) {
    try {
      const module = await import(
        `../../../data/characters/${realm}/Sniper/${character}.ts`
      );
      return module.default;
    } catch (error) {
      console.error(
        `Error loading character data for ${realm}/${character}:`,
        error,
      );
      return null;
    }
  }
};

export default function Character() {
  const router = useRouter();
  const realm = router.query.realm;
  const character = router.query.name;
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    if (!realm || !character) return;

    const loadCharacterData = async () => {
      const data = await tryImportCharacter(realm, character);
      if (data) {
        setCharacterData(data);
      }
    };

    loadCharacterData();
  }, [realm, character]);

  if (characterData == null) {
    return (
      <Page>
        <p>Character not found</p>
      </Page>
    );
  }

  const professionData = buildProfessionData(characterData);

  console.log(characterData);

  return (
    <Page>
      <h1 className={`text-xl fg-${characterData.wowclass.css}`}>
        {characterData.name}-{characterData.realm}
      </h1>

      {professionData && (
        <>
          <h2 className="text-lg my-4">Professions</h2>
          <table>
            <tbody>{professionData}</tbody>
          </table>
        </>
      )}
    </Page>
  );
}
