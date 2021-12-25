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

export const reportListReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REPORTS_GET_REQUEST:
      return { loading: true };

    case REPORTS_GET_SUCCESS:
      return { loading: false, reports: payload };

    case REPORTS_GET_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const reportByIdReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REPORT_GET_REQUEST:
      return { loading: true };

    case REPORT_GET_SUCCESS:
      return { loading: false, report: payload };

    case REPORT_GET_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const reportSubmitReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REPORTS_SUBMIT_REQUEST:
      return { loading: true };

    case REPORTS_SUBMIT_SUCCESS:
      return { loading: false, success: true };

    case REPORTS_SUBMIT_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
