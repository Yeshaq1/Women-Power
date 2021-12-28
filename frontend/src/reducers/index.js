import { combineReducers } from "redux";
import {
  getLocationByIdReducer,
  updateLocationLikesReducer,
} from "./locationReducer";
import {
  reportListReducer,
  reportSubmitReducer,
  reportByIdReducer,
  reportListByLocationReducer,
} from "./reportsReducer";

export default combineReducers({
  reportsList: reportListReducer,
  reportSubmit: reportSubmitReducer,
  reportDetail: reportByIdReducer,
  reportsByLocation: reportListByLocationReducer,
  locationLikesReducer: updateLocationLikesReducer,
  locationDetail: getLocationByIdReducer,
});
