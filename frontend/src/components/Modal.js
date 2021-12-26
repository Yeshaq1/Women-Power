import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { submitReports } from "../actions/reportsAction";
import SearchGoogleAutoComplete from "./SearchGoogleAutoComplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

const ModalConfirmation = ({ show, onHide, submit }) => {
  const [report, updateReport] = useState({
    name: "",
    reportContent: "",
    incidentType: "",
  });

  const [locationName, updateLocationName] = useState();
  const [lat, updateLat] = useState();
  const [lng, updateLng] = useState();
  const [googleId, updateGoogleId] = useState();

  const { name, reportContent, incidentType } = report;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateReport((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const getLocationDetails = (locationData) => {
    if (locationData) {
      updateLocationName(locationData.label);
      updateGoogleId(locationData.value.place_id);
      geocodeByPlaceId(locationData.value.place_id)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          updateLat(lat);
          updateLng(lng);
        });
    }
  };

  const submitReport = (e) => {
    e.preventDefault();
    const submitableReport = {
      name,
      locationName,
      reportContent,
      xCoordinate: lat,
      yCoordinate: lng,
      incidentType,
      googleId,
    };
    dispatch(submitReports(submitableReport));
    submit();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} animation={false}>
        <Form onSubmit={submitReport}>
          <Modal.Header closeButton>
            <Modal.Title>Create A Report</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Report Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={reportContent}
                name="reportContent"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Incident Type</Form.Label>
              <Form.Select
                value={incidentType}
                name="incidentType"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="Stalking">Stalking</option>
                <option value="Assault">Assault</option>
                <option value="Harassment">Harassment</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter Location"
                value={location}
                name="location"
                onChange={handleChange}
                required
              /> */}
              <SearchGoogleAutoComplete locator={getLocationDetails} />
            </Form.Group>
            <Form.Group></Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalConfirmation;
