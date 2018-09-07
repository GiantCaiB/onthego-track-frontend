import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { alert } from "./alert.reducer";
import { jobsInfo } from "./jobs.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  jobsInfo
});

export default rootReducer;
