import { combineReducers } from "redux";
import {
  reportListReducer,
  reportSubmitReducer,
  reportByIdReducer,
} from "./reportsReducer";

export default combineReducers({
  reportsList: reportListReducer,
  reportSubmit: reportSubmitReducer,
  reportDetail: reportByIdReducer,
});
