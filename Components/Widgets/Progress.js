import React from "react";
import { Card } from "@davidcraig/tailwind-nextjs-tsx/src/Card";
import GetCurrentRaidTier from "../../Functions/WoW/GetCurrentRaidTier";

function getStatus(progression) {
  if (!profession) {
    return "No active raid tier";
  }

  if (!progression.normal) {
    return "Not yet killed";
  }

  let str = "Killed: ";
  let kills = [];

  if (progression.normal) {
    kills.push("N");
  }
  if (progression.heroic) {
    kills.push("HC");
  }
  if (progression.mythic) {
    kills.push("M");
  }
  return str + kills.join(", ");
}

function getStatusClass(progression) {
  if (progression.mythic) {
    return "mythic";
  }
  if (progression.heroic) {
    return "heroic";
  }
  if (progression.normal) {
    return "normal";
  }
  return "alive";
}

export default function Progress() {
  const currentTier = GetCurrentRaidTier();
  if (!currentTier) {
    return (
      <Card title="Progression">
        <p>Not currently raiding</p>
      </Card>
    );
  }
  const progression = currentTier?.progression;

  return (
    <Card
      title={`Progression - ${currentTier.name}`}
      className="widget widget-progression"
    >
      <table className="table is-narrow is-striped">
        <tbody>
          {progression.map((p) => {
            const status = getStatus(p);
            const statusClass = getStatusClass(p);

            return (
              <tr key={p.slug} className={statusClass}>
                <td>{p.name}</td>
                <td>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
