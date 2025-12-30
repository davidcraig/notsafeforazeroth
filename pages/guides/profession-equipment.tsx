import React from "react";
import Page from "../../Components/Page.js";
import TabbedContent from "@nsfa/Components/TabbedContent.tsx";
import TabbedContentWithKey from "@nsfa/Components/TabbedContentWithKey.js";
import TWW_LW from "@nsfa/data/warwithin/crafting/leatherworking";
import TWW_BS from "@nsfa/data/warwithin/crafting/blacksmithing";
import { CraftedItem } from "@davidcraig/wowdata/CraftedItem";
import type { Character } from "@davidcraig/wowdata/Character";
import CHARACTERS from "@nsfa/data/characters.js";

const TabWithKey = TabbedContentWithKey(TabbedContent);

const expansions = [
  { name: "The War Within", slug: "tww", id: 11 },
  // { name: 'Dragonflight', slug: 'df', id: 10 },
  // Profession Equip didn't exist in this form before that.
];

type CraftedProfessionEquipment = CraftedItem & {
  craftedByProfession?: string;
  crafters?: Character[];
};
type ProfessionEquipmentPageProfession = {
  name: string;
  basicItems?: CraftedProfessionEquipment[];
  epicItems?: CraftedProfessionEquipment[];
};

function getExpansionContent(expansionId) {
  switch (expansionId) {
    case 11:
      const professions: ProfessionEquipmentPageProfession[] = [
        {
          name: "Alchemy",
          basicItems: [
            { ...TWW_LW.ApothecarysCap, craftedByProfession: "Leatherworking" },
          ],
        },
        {
          name: "Blacksmithing",
          basicItems: [
            {
              ...TWW_LW.SteelsmithsApron,
              craftedByProfession: "Leatherworking",
            },
          ],
        },
        {
          name: "Skinning",
          basicItems: [
            {
              ...TWW_LW.HideseekersPack,
              craftedByProfession: "Leatherworking",
              crafters: [CHARACTERS.Snipá_SM],
            },
            {
              ...TWW_LW.HideseekersHat,
              craftedByProfession: "Leatherworking",
              crafters: [CHARACTERS.Snipá_SM],
            },
          ],
        },
        {
          name: "Herbalism",
          basicItems: [
            {
              ...TWW_LW.GardenersBasket,
              craftedByProfession: "Leatherworking",
            },
          ],
        },
        {
          name: "Leatherworking",
          basicItems: [
            {
              ...TWW_BS.ProficientLeatherworkersToolset,
              craftedByProfession: "Blacksmithing",
            },
            {
              ...TWW_BS.ProficientLeatherworkersKnife,
              craftedByProfession: "Blacksmithing",
            },
            {
              ...TWW_LW.HideshapersCover,
              craftedByProfession: "Leatherworking",
            },
          ],
        },
        {
          name: "Engineering",
          basicItems: [
            {
              ...TWW_LW.ScrapsmithsGloves,
              craftedByProfession: "Leatherworking",
            },
          ],
        },
        {
          name: "Jewelcrafting",
          basicItems: [
            {
              ...TWW_LW.GemcuttersApron,
              craftedByProfession: "Leatherworking",
            },
          ],
        },
      ];
      return professions;
      break;
    default:
      break;
  }
}

function RenderExpansionContent(expansion) {
  const professions = getExpansionContent(expansion.id);

  return (
    <table
      id={`expansion-${expansion.id}`}
      key={`expansion-${expansion.id}`}
      className="table mt-4"
    >
      <tbody>
        {professions.map((profession) => {
          return (
            <React.Fragment key={profession.name}>
              <tr key={`${profession.name}-header`}>
                <th colSpan={3} className="bg-theme-2 text-xl py-4">
                  {profession.name}
                </th>
              </tr>

              <tr key={`${profession.name}-thead-header`}>
                <th>Item</th>
                <th>Crafted By Profession</th>
                <th>Crafters</th>
              </tr>

              {profession.basicItems?.map(
                (item: CraftedProfessionEquipment) => {
                  return (
                    <tr key={item.url}>
                      <td>
                        <a className={`fg-${item.rarity}`} href={item.url}>
                          {item.name}
                        </a>
                      </td>
                      <td>{item.craftedByProfession ?? "Source Unknown"}</td>
                      <td>
                        {item.crafters?.map((crafter) => {
                          return (
                            <p
                              className={`fg-${crafter.wowclass.css}`}
                              key={`${crafter.name}-${crafter.realm}`}
                            >
                              {crafter.name}-{crafter.realm}
                            </p>
                          );
                        })}
                      </td>
                    </tr>
                  );
                },
              )}

              {profession.epicItems?.map((item: CraftedProfessionEquipment) => {
                return (
                  <tr key={item.url}>
                    <td>
                      <a className={`fg-${item.rarity}`} href={item.url}>
                        {item.name}
                      </a>
                    </td>
                    <td>({item.craftedByProfession ?? "Source Unknown"})</td>
                    <td>
                      {item.crafters?.map((crafter) => {
                        return (
                          <p
                            className={`fg-${crafter.wowclass.css}`}
                            key={crafter.name}
                          >
                            {crafter.name}
                          </p>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ProfessionEquipment() {
  const tabs = [];

  expansions.forEach((ex) => {
    tabs.push({
      title: ex.name,
      content: RenderExpansionContent(ex),
    });
  });

  return (
    <Page>
      <h1 className="text-xl mb-4">Profession Equipment</h1>

      <TabWithKey id="profession-equipment" content={tabs} />
    </Page>
  );
}
