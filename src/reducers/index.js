import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import { reducer as sematable } from "sematable";


export default combineReducers({
  auth,
  message,
  sematable,
});
