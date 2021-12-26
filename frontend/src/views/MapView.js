import React, { useEffect, useState } from "react";
import { getAllReports } from "../actions/reportsAction";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Search from "../components/Search";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import { iconDanger, iconStalker } from "../utils/markers";
import Legend from "../components/Legend";
import Popups from "../components/Popups";
import Locator from "../components/Locator";
import SetupLocator from "../components/SetupLocator";

const MapView = () => {
  const prov = OpenStreetMapProvider();
  const dispatch = useDispatch();

  const reportsList = useSelector((state) => state.reportsList);
  const { reports, loading } = reportsList;

  const reportSubmit = useSelector((state) => state.reportSubmit);
  const { success } = reportSubmit;

  const [modalShow, setModalShow] = useState(false);

  function MyComponent() {
    useMapEvents({
      click: (e) => {
        setModalShow(true);
      },
    });
    return null;
  }

  useEffect(() => {
    dispatch(getAllReports());
  }, [dispatch, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MapContainer
          style={{ height: "70vh" }}
          center={[51.505, -0.09]}
          zoom={10}
          scrollWheelZoom={false}
          className="markercluster-map"
          tap={false}
          touchZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup>
            {reports.map((report) => (
              <Marker
                key={report._id}
                position={[
                  report.location.xCoordinate,
                  report.location.yCoordinate,
                ]}
                icon={
                  report.incidentType === "Stalking" ? iconStalker : iconDanger
                }
                autoPan={false}
              >
                <Popups reportDetails={report} />
              </Marker>
            ))}
          </MarkerClusterGroup>
          <MyComponent />
          <Search
            provider={prov}
            showMarker={true}
            showPopup={false}
            popupFormat={({ query, result }) => result.label}
            maxMarkers={3}
            retainZoomLevel={false}
            animateZoom={true}
            autoClose={true}
            searchLabel={"Enter address, please"}
            keepResult={true}
          />
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            submit={() => setModalShow(false)}
          />
          <Legend />
          <SetupLocator />
          <Locator />
        </MapContainer>
      )}
    </>
  );
};

export default MapView;
