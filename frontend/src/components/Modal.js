import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { submitReports } from "../actions/reportsAction";

const ModalConfirmation = ({ show, onHide, lat, lng, submit }) => {
  const [report, updateReport] = useState({
    name: "",
    reportContent: "",
    incidentType: "",
    location: "",
  });

  const { name, reportContent, incidentType, location } = report;

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

  const submitReport = (e) => {
    e.preventDefault();
    const submitableReport = {
      name,
      location,
      reportContent,
      xCoordinate: lat,
      yCoordinate: lng,
      incidentType,
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
              <Form.Control
                type="text"
                placeholder="Enter Location"
                value={location}
                name="location"
                onChange={handleChange}
                required
              />
            </Form.Group>
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
