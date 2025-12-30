import React from "react";
import PageWithWidgets from "../Components/PageWithWidgets.js";
import { Card } from "@davidcraig/tailwind-nextjs-tsx";
import Aronin from "../data/characters/TarrenMill/Aronin.ts";
import Whoorelips from "../data/characters/TarrenMill/Whoorelips.ts";
import CHARACTERS from "@nsfa/data/characters.ts";

const officers = [
  {
    real: "Dave",
    alias: "Sniper",
    rank: "Fuhrer",
    bio: "",
    main: CHARACTERS.Sniperdrood_TM,
  },
  {
    real: "Chris",
    alias: "Aronin",
    rank: "Officer",
    bio: "",
    main: Aronin,
  },
  {
    real: "Rob",
    alias: "Whoorelips",
    rank: "Officer",
    bio: "",
    main: Whoorelips,
  },
];

export default function Officers() {
  return (
    <PageWithWidgets>
      <h1 className="h1">Officers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {officers.map((officer) => {
          return (
            <Card
              title={`${officer.alias} (${officer.real})`}
              className={`${officer.main.wowclass.css}`}
            ></Card>
          );
        })}
      </div>
    </PageWithWidgets>
  );
}
