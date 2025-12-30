import Page from "../../../Components/Page";
import YoutubeEmbed from "../../../Components/YoutubeEmbed";
import { default as nerubBosses } from "../../../data/warwithin/progression/nerubarPalace";

const imgPath = "/img/warwithin/raid/nerubar/";

export default function NerubarPalace() {
  return (
    <Page title="Nerub-ar Palace">
      <h1 className="text-xl">Nerub-ar Palace</h1>

      <h2 className="text-lg">Boss Guides</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mb-2">
          {nerubBosses.map((boss, index) => {
            return boss.video && <YoutubeEmbed key={index} url={boss.video} />;
          })}
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
          {nerubBosses.map((boss, index) => {
            return (
              boss.img && (
                <img
                  key={index}
                  style={{
                    width: "100%",
                    flexGrow: 0,
                    flexShrink: 0,
                    maxWidth: "100%",
                  }}
                  src={boss.img ? `${imgPath}${boss.img}` : null}
                />
              )
            );
          })}
        </div>
      </div>
    </Page>
  );
}
