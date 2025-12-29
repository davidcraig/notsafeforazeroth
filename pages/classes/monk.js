import React from "react";
import { Card } from "@davidcraig/tailwind-nextjs-tsx";
import Page from "../../Components/WoWClassPage";
import Monk from "@davidcraig/wowdata/classes/monk";
import YoutubeEmbed from "../../Components/YoutubeEmbed";

export default function ClassMonk() {
  const props = {
    title: "Monk",
    class: Monk,
    specContent: {
      brewmaster: (
        <Card title="Monk Tank Guide">
          <YoutubeEmbed url="3ZukkpWAXOQ" />
        </Card>
      ),
      windwalker: (
        <Card title="Weak Auras">
          <div className="p-4">
            <a href="https://wago.io/WindwalkerLastAbility">
              WindwalkerLastAbility
            </a>
          </div>
        </Card>
      ),
    },
  };

  return <Page {...props}></Page>;
}
