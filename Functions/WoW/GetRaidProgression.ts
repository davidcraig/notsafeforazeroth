const GetRaidProgression = (raid) => {
  let normal = 0;
  let heroic = 0;
  let mythic = 0;
  raid.progression.forEach(p => {
    if (p.normal) { normal++ }
    if (p.heroic) { heroic++ }
    if (p.mythic) { mythic++ }
  });
  return {
    normal,
    heroic,
    mythic
  }
}

export default GetRaidProgression
