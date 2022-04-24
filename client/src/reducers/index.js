import { combineReducers } from "redux";

import lists from "./lists";
import auth from "./auth";

export default combineReducers({
   lists,
   auth,
});
