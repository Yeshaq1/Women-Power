import {
  GET_LOCATION_BY_ID_FAIL,
  GET_LOCATION_BY_ID_REQUEST,
  GET_LOCATION_BY_ID_SUCCESS,
  UPDATE_LOCATION_LIKES_FAIL,
  UPDATE_LOCATION_LIKES_REQUEST,
  UPDATE_LOCATION_LIKES_SUCCESS,
} from "../constants/locationConstants";

export const updateLocationLikesReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_LOCATION_LIKES_REQUEST:
      return { loading: true };

    case UPDATE_LOCATION_LIKES_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case UPDATE_LOCATION_LIKES_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const getLocationByIdReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LOCATION_BY_ID_REQUEST:
      return { loading: true };

    case GET_LOCATION_BY_ID_SUCCESS:
      return { loading: false, location: payload };

    case UPDATE_LOCATION_LIKES_SUCCESS:
      return {
        ...state,
        loading: false,
        location: {
          ...state.location,
          numberOfLikes: state.location.numberOfLikes + 1,
        },
      };

    case GET_LOCATION_BY_ID_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
