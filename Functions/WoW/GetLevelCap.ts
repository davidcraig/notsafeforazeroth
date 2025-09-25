import GetCurrentExpansion from "./GetCurrentExpansion.ts";

const GetLevelCap = () => {
  return GetCurrentExpansion().levelcap;
}

export default GetLevelCap
