import React from "react";
import type { Character } from "@davidcraig/wowdata/Character";
import { Realm } from "@davidcraig/wowdata/Realm";
import CharacterNameRealmLink from "@nsfa/Components/Character/CharacterNameRealmLink.tsx";
import Page from "../Components/Page.js";

import CHARACTERS from "@nsfa/data/characters.ts";

// Tarren Mill
import Crássiúss from "../data/characters/TarrenMill/Crássiúss.ts";
import Aronin from "../data/characters/TarrenMill/Aronin.ts";

// Draenor

const RANKS = {
  Officer: "Officer",
  Enforcer: "Enforcer",
  Member: "Member",
};

let characters = {};

const addCharacter = (character: Character) => {
  characters[character.name] = {
    name: character.name,
    class: character.wowclass,
    role: character.role,
    realm: character.realm,
  };
};

const roster = {
  officers: [
    {
      real: "Chris",
      rank: RANKS.Officer,
      main: Aronin,
    },
    {
      real: "Dave / Sniper",
      rank: RANKS.Officer,
      main: CHARACTERS.Sniperdrood_TM, // Mining/Herbalism
      mainalts: [
        CHARACTERS.Snipedk_SM, // BS
        CHARACTERS.Snipá_SM, // Skinning
        CHARACTERS.Sniperdeeh_TM, // Ench
        CHARACTERS.Snipersham_SM, // Tail / LW
        CHARACTERS.Sniperwar_SM, // Engineering
        CHARACTERS.Snipérmonk_TM, // Alchemy
        CHARACTERS.Sniperlock_TM, // Inscription
        CHARACTERS.Snipepal_SM, // Jewelcrafting
        CHARACTERS.Snipermagi_TM, // Cooking
      ],
      alts: [
        // TM
        // Snipedeath,
        // Snipermagi,
        // Snipérmonk,
        // SM
        // Sniperwar,
        // Mag
        CHARACTERS.Snipá_MAG, // Cooking / Fishing
      ],
    },
    {
      real: "Rob",
      rank: RANKS.Officer,
      main: CHARACTERS.Whoorelips_TM,
    },
    {
      real: "Gary",
      rank: RANKS.Officer,
      // main: characters.Palabellum,
      // alts: [ characters.Hoarfróst ]
    },
    {
      real: "Tom",
      rank: RANKS.Officer,
      // main: characters.Skiradan,
      // alts: [ characters.Demonbanger ]
    },
  ],
  enforcers: [],
  members: [],
  combined: [],
};

const addMember = (
  real: string,
  character: Character,
  mainalts: Character[] = null,
  alts: Character[] = null,
) => {
  let obj = {
    rank: RANKS.Member,
    main: character,
    alts: null,
    mainalts: null,
    real: real,
  };

  if (alts) {
    obj.alts = alts;
  }

  roster.members.push(obj);
};

addMember("Crass", Crássiúss);

roster.combined = [...roster.officers, ...roster.enforcers, ...roster.members];

const getCardTitle = (m) => {
  if (!m.main) return;
  let fragment = (
    <>
      {m.main && m.main?.role?.length > 0 && (
        <>
          {m.main.role.map((role) => {
            return (
              <img
                width={24}
                height={24}
                style={{ display: "inline-block", marginRight: ".25rem" }}
                src={role.icon}
              />
            );
          })}
        </>
      )}
      <span className="mr-4">
        <CharacterNameRealmLink character={m.main} />
      </span>
    </>
  );

  return fragment;
};

const getArmoryLink = (character: Character) => {
  if (!character) return null;
  if (!character.realm) return null;

  let realm: string = character.realm;
  if (character.realm == Realm.TarrenMill) {
    realm = "tarren-mill";
  }

  return `https://worldofwarcraft.blizzard.com/en-gb/character/eu/${realm}/${character.name}`;
};

const renderAlt = (alt: Character) => {
  const link = getArmoryLink(alt);

  if (!link) {
    return (
      <span key={`${alt.name}-${alt.realm}`}>
        {alt.role &&
          alt.role.map((role) => (
            <img
              width={24}
              height={24}
              style={{ display: "inline-block", marginRight: ".25rem" }}
              src={role.icon}
            />
          ))}
        <CharacterNameRealmLink character={alt} />
      </span>
    );
  }

  return (
    <span key={`${alt.name}-${alt.realm}`}>
      {alt.role &&
        alt.role.map((role) => (
          <img
            width={24}
            height={24}
            style={{ display: "inline-block", marginRight: ".25rem" }}
            src={role.icon}
          />
        ))}
      <span className="mr-4">
        <CharacterNameRealmLink character={alt} />
      </span>
    </span>
  );
};

// const ClassCompWidget = () => {
//   let data = []

//   Object.keys(wowClasses).forEach(cl => {
//     const wClass = wowClasses[cl]
//     data.push({
//       key: cl,
//       name: wClass.name,
//       count: roster.combined.filter(m => m.main?.wowclass?.name === wClass.name).length,
//       css: `fg-${wClass.css}-important`
//     })
//   })

//   return (
//     <>
//       <Card title="Class Composition ~">
//         <table>
//           <tbody>
//             {
//               data.map(wowClass => {
//                 return <tr key={wowClass.key}>
//                   <td className={wowClass.css}>{wowClass.name}</td>
//                   <td className={wowClass.css}>{wowClass.count}</td>
//                 </tr>
//               })
//             }
//           </tbody>
//         </table>
//       </Card>
//     </>
//   )
// }

const RosterAsTable = ({ className }) => {
  return (
    <table className={`table is-striped ${className}`}>
      <thead>
        <tr>
          <th>Player</th>
          <th>Main</th>
          <th>Main Alts</th>
          <th>Other Alts</th>
        </tr>
      </thead>
      <tbody>
        {roster.combined.map((player) => {
          return (
            <tr key={player.real}>
              <td>{player.real}</td>
              <td>{getCardTitle(player)}</td>
              <td>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {player.mainalts &&
                    player.mainalts.map((alt) => {
                      return renderAlt(alt);
                    })}
                </div>
              </td>
              <td>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {player.alts &&
                    player.alts.map((alt) => {
                      return renderAlt(alt);
                    })}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function Roster() {
  return (
    <Page>
      <h1 className="h1 text-xl mb-4">Roster</h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
        <RosterAsTable className="lg:col-span-5" />

        <aside className="grid grid-cols-1 lg:col-span-1">
          {/* <Card title="Role Composition ~">
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.DPS.icon} /> DPS: {roster.combined.filter(m => m.main?.role?.name === "DPS").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Tank.icon} /> Tanks: {roster.combined.filter(m => m.main?.role?.name === "Tank").length}</div>
          <div><img width={24} height={24} style={{display: 'inline-block', marginRight: '.5rem'}} src={ROLES.Healer.icon} /> Healers: {roster.combined.filter(m => m.main?.role?.name === "Healer").length}</div>
        </Card> */}

          {/* <ClassCompWidget /> */}
        </aside>
      </div>
    </Page>
  );
}
