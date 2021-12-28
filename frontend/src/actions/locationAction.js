import axios from "axios";
import {
  GET_LOCATION_BY_ID_FAIL,
  GET_LOCATION_BY_ID_REQUEST,
  GET_LOCATION_BY_ID_SUCCESS,
  UPDATE_LOCATION_LIKES_FAIL,
  UPDATE_LOCATION_LIKES_REQUEST,
  UPDATE_LOCATION_LIKES_SUCCESS,
} from "../constants/locationConstants";

export const updateLocationLikes = (locationId) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_LOCATION_LIKES_REQUEST,
    });

    await axios.put(`/api/location/updateLikes/${locationId}`);

    dispatch({
      type: UPDATE_LOCATION_LIKES_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_LOCATION_LIKES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLocationById = (locationId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOCATION_BY_ID_REQUEST,
    });

    const { data } = await axios.get(`/api/location/${locationId}`);

    dispatch({
      type: GET_LOCATION_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOCATION_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
