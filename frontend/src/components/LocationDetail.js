import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Col,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateLocationLikes } from "../actions/locationAction";

const LocationDetail = ({ location }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(updateLocationLikes(location._id));
  };
  return (
    <>
      <Col lg={4} className="my-3 ">
        <h5>Location Details</h5>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>Location: {location.locationName}</ListGroupItem>
            <ListGroupItem>
              {location.typeOfLocation.map((type, i) => (
                <Badge key={i} bg="dark" className="m-1">
                  {type}
                </Badge>
              ))}
            </ListGroupItem>
            <ListGroupItem>
              Number of Incidents: {location.numberOfIncidents}
            </ListGroupItem>
            <ListGroupItem>
              Is this information useful?
              <Button variant="light" className="mx-1" onClick={onClick}>
                <i className="far fa-thumbs-up mx-1"></i>
                {location.numberOfLikes}
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </>
  );
};

export default LocationDetail;
