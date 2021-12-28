import React from "react";
import Moment from "react-moment";
import { Row, Col, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ReportList = ({ reports }) => {
  return (
    <>
      <Row className="m-3">
        <h5>Other Reports</h5>
        <Col lg={8}>
          {reports.map((item) => (
            <Card className="my-2">
              <ListGroup>
                <CardHeader>Incident Type: {item.incidentType}</CardHeader>
                <ListGroupItem>
                  Date: <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
                </ListGroupItem>
                <ListGroupItem>Details: {item.reportContent}</ListGroupItem>
              </ListGroup>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default ReportList;
