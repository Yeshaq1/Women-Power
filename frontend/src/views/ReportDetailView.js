import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReportsByLocation,
  getReportById,
} from "../actions/reportsAction";
import { useParams, Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import Loader from "../components/Loader";
import LocationDetail from "../components/LocationDetail";
import ReportList from "../components/ReportList";
import ReportDetail from "../components/ReportDetail";
import { getLocationById } from "../actions/locationAction";

const ReportDetailView = () => {
  const dispatch = useDispatch();

  const reportDetail = useSelector((state) => state.reportDetail);
  const { report, loading } = reportDetail;

  const reportsByLocation = useSelector((state) => state.reportsByLocation);
  const { reports, loading: loadingByLocation } = reportsByLocation;

  const locationDetail = useSelector((state) => state.locationDetail);
  const { location, loading: loadingLocation } = locationDetail;

  const locationLikesReducer = useSelector(
    (state) => state.locationLikesReducer
  );
  const { success } = locationLikesReducer;

  const params = useParams();
  const reportId = params.id;
  const locationId = params.locationId;

  useEffect(() => {
    dispatch(getReportById(reportId));
    dispatch(getLocationById(locationId));
    dispatch(getAllReportsByLocation(reportId, locationId));
  }, [dispatch, reportId, locationId]);

  return (
    <>
      {loading || loadingLocation ? (
        <Loader />
      ) : (
        <Container>
          <Row className="my-3">
            <Link to="/">Back</Link>
          </Row>
          <Row className="m-3">
            <ReportDetail report={report} />
            <LocationDetail location={location} />
          </Row>
          {loadingByLocation ? (
            <Loader />
          ) : reports.length === 0 ? null : (
            <ReportList reports={reports} />
          )}
        </Container>
      )}
    </>
  );
};

export default ReportDetailView;
