import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Moment from "react-moment";

const ReportDetail = ({ report }) => {
  return (
    <>
      <Col lg={8} className="my-3">
        <h5>Report Details</h5>
        <ListGroup variant="flush">
          <ListGroupItem>
            <Row>
              <Col lg={9}>
                Date: <Moment format="YYYY/MM/DD">{report.createdAt}</Moment>
              </Col>
              <Col lg={3}>
                {report.verified ? (
                  <span>
                    Verified{" "}
                    <i
                      style={{ color: "green" }}
                      className="far fa-check-square"
                    ></i>{" "}
                  </span>
                ) : null}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>Name: {report.name}</ListGroupItem>
          <ListGroupItem>Incident Type: {report.incidentType}</ListGroupItem>
          <ListGroupItem>Details: {report.reportContent}</ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};

export default ReportDetail;
