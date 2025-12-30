import Page from "../../../Components/Page";
import YoutubeEmbed from "../../../Components/YoutubeEmbed";
import { default as manaforgeBosses } from "../../../data/warwithin/progression/manaforge";

const imgPath = "/img/warwithin/raid/nerubar/";

export default function NerubarPalace() {
  return (
    <Page title="Nerub-ar Palace">
      <h1 className="text-xl">Manaforge Omega</h1>

      <h2 className="text-lg">Boss Guides</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2">
          {manaforgeBosses.map((boss, index) => {
            return boss.video && <YoutubeEmbed url={boss.video} height="450" />;
          })}
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
          {manaforgeBosses.map((boss, index) => {
            return (
              boss.img && (
                <img
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
