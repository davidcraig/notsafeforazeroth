import React from "react";
import NsfaNavbar from "../Components/NsfaNavbar";
import "../styles/app.scss";
import { ExternalLink } from "@davidcraig/tailwind-nextjs-tsx/src/ExternalLink.tsx";

const footerLinks = [
  {
    name: "Raider.io",
    url: "https://raider.io/guilds/eu/tarren-mill/Not%20Safe%20for%20Azeroth",
  },
  { name: "Discord", url: "https://discord.gg/CtqNwgQnJm" },
  {
    name: "Armory",
    url: "https://worldofwarcraft.blizzard.com/en-gb/guild/eu/tarren-mill/not-safe-for-azeroth",
  },
];

const wowhead =
  ((
    <script
      dangerouslySetInnerHTML={{
        __html: `
        var wowhead_tooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
      `,
      }}
    />
  ),
  (<script src="https://wow.zamimg.com/widgets/power.js"></script>));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="full-height">
        <NsfaNavbar />
        {wowhead}
        <Component {...pageProps} />
        <footer>
          <nav
            id="footer-navigation"
            name="footer-nav"
            aria-label="Footer Navigation"
          >
            {footerLinks.map((link) => {
              return (
                <>
                  <ExternalLink
                    key={link.url}
                    href={link.url}
                    title={link.name}
                  />
                </>
              );
            })}
          </nav>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
