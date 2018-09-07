import {jobConstants} from "../_constants";

let jobs = JSON.parse(localStorage.getItem('jobs'));
const initialState = jobs ? { jobs } : [];

export function jobsInfo(state = initialState, action) {
  switch (action.type) {
    case jobConstants.GET_ALL_SUCCESS:
      return {
        jobs: action.jobs
      };
    case jobConstants.GET_ALL_FAILURE:
      return {};
    default:
      return state;
  }
}