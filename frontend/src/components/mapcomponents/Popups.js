import React from "react";
import { Popup } from "react-leaflet";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Popups = ({ reportDetails }) => {
  return (
    <>
      <Popup>
        <ListGroup variant="flush">
          <ListGroupItem>Name: {reportDetails.name}</ListGroupItem>
          <ListGroupItem>
            Location: {reportDetails.location.locationName}
          </ListGroupItem>
          <ListGroupItem>
            Incident Type: {reportDetails.incidentType}
          </ListGroupItem>
          <ListGroupItem>
            Number of Incidents: {reportDetails.location.numberOfIncidents}
          </ListGroupItem>
          <ListGroupItem>
            Details:
            {reportDetails.reportContent.length > 100
              ? reportDetails.reportContent.substring(0, 100) + "..."
              : reportDetails.reportContent}
          </ListGroupItem>
          <ListGroupItem>
            <LinkContainer
              to={`/report/${reportDetails._id}/${reportDetails.location._id}`}
            >
              <Button variant="outline-dark" className="col-12">
                Details
              </Button>
            </LinkContainer>
          </ListGroupItem>
        </ListGroup>
      </Popup>
    </>
  );
};

export default Popups;
