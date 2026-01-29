import React from "react";
import Page from "../../Components/Page.js";
import Card from "#packages/tailwind-nextjs-tsx/src/Card.tsx";
import TabbedContent from "@nsfa/Components/TabbedContent.tsx";
import YoutubeEmbed from "@nsfa/Components/YoutubeEmbed.js";
import { castleNathria } from "../../data/shadowlands/raids.ts";

const SHOW_MYTHIC = false;

const Tactics = {
  shriekwing: (
    <>
      <p className="tanks">Tanks</p>
      <a className="spell" href="https://www.wowhead.com/spell=328857">
        Exsanguinating Bite
      </a>{" "}
      applies 10 x Exsanguinated (Stacks)
      <p className="healers">Healers</p>
      Stand 12 yards away from boss (To avoid Blind Swipe - Cone AOE)
      <p className="all">Everyone</p>
      <a className="spell" href="https://www.wowhead.com/spell=342077">
        Echolocation
      </a>{" "}
      (White pulsing circle debuff, drops bat on top of you) - Leaves a blood
      pool on the ground, move away from raid.
    </>
  ),
};

const TLDRTactics = {
  title: "TLDR Tactics",
  content: <Card title="Shriekwing">{Tactics.shriekwing}</Card>,
};

const NormalHeroicVideos = {
  title: "Videos: Normal / Heroic",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {castleNathria.map((boss) => (
        <Card className="mt-4" title={boss.name}>
          <YoutubeEmbed url={boss.video} />
        </Card>
      ))}
    </div>
  ),
};
const MythicVideos = {
  title: "Mythic",
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {castleNathria.map((boss) => (
        <Card className="mt-4" title={boss.name}>
          <YoutubeEmbed url={boss.mythic_video} />
        </Card>
      ))}
    </div>
  ),
};

export default function CastleNathriaPage() {
  const tabbedContent = [NormalHeroicVideos];
  if (SHOW_MYTHIC) {
    tabbedContent.push(MythicVideos);
  }
  tabbedContent.push(TLDRTactics);

  return (
    <Page title="Castle Nathria">
      <h1 className="h1">Castle Nathria</h1>
      <TabbedContent content={tabbedContent} />
    </Page>
  );
}
