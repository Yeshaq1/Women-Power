import L from "leaflet";
import danger from "../images/risk.png";
import stalker from "../images/stalker.png";

const iconDanger = new L.Icon({
  iconUrl: danger,
  iconSize: new L.Point(30, 30),
});

const iconStalker = new L.Icon({
  iconUrl: stalker,
  iconSize: new L.Point(30, 30),
});

export { iconDanger, iconStalker };
