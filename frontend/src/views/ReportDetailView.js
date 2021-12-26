import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportById } from "../actions/reportsAction";
import { useParams, Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Col, Row, Container } from "react-bootstrap";
import Loader from "../components/Loader";

const ReportDetailView = () => {
  const dispatch = useDispatch();

  const reportDetail = useSelector((state) => state.reportDetail);
  const { report, loading } = reportDetail;

  const params = useParams();

  useEffect(() => {
    dispatch(getReportById(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row className="my-3">
            <Link to="/">Back</Link>
          </Row>
          <Row className="m-3">
            <Col lg={6}>
              <ListGroup variant="flush">
                <ListGroupItem>Name: {report.name}</ListGroupItem>
                <ListGroupItem>
                  Incident Type: {report.incidentType}
                </ListGroupItem>
                <ListGroupItem>
                  Location: {report.location.locationName}
                </ListGroupItem>
                <ListGroupItem>Details: {report.reportContent}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ReportDetailView;
