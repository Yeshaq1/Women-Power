import { useEffect } from "react";
import Locate from "leaflet.locatecontrol";
import { useMap } from "react-leaflet";

const Locator = () => {
  const map = useMap();
  useEffect(() => {
    const lc = new Locate();
    lc.addTo(map);
    return () => {
      map.removeControl(lc);
    };
  }, [map]);
  return null;
};

export default Locator;
