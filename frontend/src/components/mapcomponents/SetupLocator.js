import { useEffect } from "react";
import { useMap } from "react-leaflet";

const SetupLocator = () => {
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      map.panTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return null;
};

export default SetupLocator;
