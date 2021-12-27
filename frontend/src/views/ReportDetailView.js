import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReportsByLocation,
  getReportById,
} from "../actions/reportsAction";
import { useParams, Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Container,
  Badge,
  Card,
} from "react-bootstrap";
import Loader from "../components/Loader";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ReportDetailView = () => {
  const dispatch = useDispatch();

  const reportDetail = useSelector((state) => state.reportDetail);
  const { report, loading } = reportDetail;

  const reportsByLocation = useSelector((state) => state.reportsByLocation);
  const { reports, loading: loadingByLocation } = reportsByLocation;

  const params = useParams();
  const reportId = params.id;
  const locationId = params.locationId;

  useEffect(() => {
    dispatch(getReportById(reportId));
    dispatch(getAllReportsByLocation(reportId, locationId));
  }, [dispatch, reportId, locationId]);

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
            <Col lg={8} className="my-3">
              <h5>Report Details</h5>
              <ListGroup>
                <ListGroupItem>Name: {report.name}</ListGroupItem>
                <ListGroupItem>
                  Incident Type: {report.incidentType}
                </ListGroupItem>
                <ListGroupItem>Details: {report.reportContent}</ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg={4} className="my-3">
              <h5>Location Details</h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    Location: {report.location.locationName}
                  </ListGroupItem>
                  <ListGroupItem>
                    {report.location.typeOfLocation.map((type) => (
                      <Badge className="mx-1" key={type.index}>
                        {type}
                      </Badge>
                    ))}
                  </ListGroupItem>
                  <ListGroupItem>
                    Number of Incidents: {report.location.numberOfIncidents}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          {loadingByLocation ? (
            <Loader />
          ) : reports.length === 0 ? null : (
            <Row className="m-3">
              <h5>Other Reports</h5>
              <Col lg={8}>
                {reports.map((item) => (
                  <Card className="my-2">
                    <ListGroup>
                      <CardHeader>
                        Incident Type: {item.incidentType}
                      </CardHeader>
                      <ListGroupItem>
                        Details: {item.reportContent}
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                ))}
              </Col>
            </Row>
          )}
        </Container>
      )}
    </>
  );
};

export default ReportDetailView;
