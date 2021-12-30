import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const Legend = () => {
  const map = useMap();

  const getIcon = (legendItem) => {
    return legendItem === "Stalking"
      ? "/stalker.png"
      : legendItem === "Assault"
      ? "/risk.png"
      : "/harrasment.png";
  };

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const legendItems = ["Stalking", "Assault", "Harassment", "Other"];
      let labels = [];
      let legendItem;

      for (let i = 0; i < legendItems.length; i++) {
        legendItem = legendItems[i];

        labels.push(
          '<img src ="images' + getIcon(legendItem) + '"/>' + legendItem
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
    return () => map.removeControl(legend);
  }, [map]);
  return null;
};

export default Legend;
