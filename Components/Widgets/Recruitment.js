import React from "react";
import { Card } from "jsr:@davidcraig/tailwind-nextjs-tsx";

const showClasses = false;

const classStatuses = [
  { name: "Priest", status: "Open", css: "fg-priest" },
  { name: "Mage", status: "Open", css: "fg-mage" },
  { name: "Warlock", status: "Open", css: "fg-warlock" },
  { name: "Druid", status: "Open", css: "fg-druid" },
  { name: "Rogue", status: "Open", css: "fg-rogue" },
  { name: "Demon Hunter", status: "Open", css: "fg-demonhunter" },
  { name: "Monk", status: "Open", css: "fg-monk" },
  { name: "Hunter", status: "Open", css: "fg-hunter" },
  { name: "Shaman", status: "Open", css: "fg-shaman" },
  { name: "Evoker", status: "Open", css: "fg-evoker" },
  { name: "Paladin", status: "Open", css: "fg-paladin" },
  { name: "Warrior", status: "Open", css: "fg-warrior" },
  { name: "Death Knight", status: "Open", css: "fg-deathknight" },
];

function getStatusClass(classStatus) {
  const status = classStatus.status;

  switch (status) {
    case "Closed":
      return "recruitment-closed";
    case "Open":
      return "recruitment-open";
    default:
      return status;
  }
}

export default function Recruitment(showImg = true) {
  return (
    <Card title="Recruitment" className="widget widget-recruitment">
      <table className="table is-narrow is-striped">
        <tbody>
          {showClasses &&
            classStatuses.map((s) => {
              return (
                <tr key={s.css}>
                  <td className={`${s.css} px-2 py-1`}>{s.name}</td>
                  <td className={`${getStatusClass(s)} px-2 py-1`}>
                    {s.status}
                  </td>
                </tr>
              );
            })}

          {!showClasses && (
            <tr>
              <td className="recruitment-open p-4">
                We are currently looking for several players, any spec and role
                are welcome while we build our core team.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showImg && <img src="/NSFA-Recruitment.jpg" />}
    </Card>
  );
}
