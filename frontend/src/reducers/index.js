import { combineReducers } from "redux";
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
});
