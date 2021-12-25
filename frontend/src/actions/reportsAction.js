import axios from "axios";
import {
  REPORTS_GET_FAIL,
  REPORTS_GET_REQUEST,
  REPORTS_GET_SUCCESS,
  REPORTS_SUBMIT_FAIL,
  REPORTS_SUBMIT_REQUEST,
  REPORTS_SUBMIT_SUCCESS,
  REPORT_GET_FAIL,
  REPORT_GET_REQUEST,
  REPORT_GET_SUCCESS,
} from "../constants/reportConstants";

export const getAllReports = () => async (dispatch) => {
  try {
    dispatch({ type: REPORTS_GET_REQUEST });

    const { data } = await axios.get("./api/reports");

    dispatch({
      type: REPORTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPORTS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getReportById = (id) => async (dispatch) => {
  try {
    dispatch({ type: REPORT_GET_REQUEST });

    const { data } = await axios.get(`/api/reports/${id}`);

    dispatch({
      type: REPORT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPORT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const submitReports = (report) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: REPORTS_SUBMIT_REQUEST });

    const { data } = await axios.post("./api/reports", report, config);

    dispatch({
      type: REPORTS_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPORTS_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
