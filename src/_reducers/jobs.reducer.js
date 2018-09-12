import { jobConstants } from "../_constants";

let jobs = JSON.parse(localStorage.getItem("jobs"));
const initialState = jobs ? { jobs } : {};

export function jobsInfo(state = initialState, action) {
  switch (action.type) {
    // Get_All Actions
    case jobConstants.GET_ALL_REQUEST:
      return {
        state
      };
    case jobConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      };
    case jobConstants.GET_ALL_FAILURE:
      return {
        error: action.error
      };
    
    default:
      return state;
  }
}
