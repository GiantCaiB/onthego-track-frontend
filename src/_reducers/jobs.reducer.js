import { jobConstants } from "../_constants";

export function jobsInfo(state = {}, action) {
  switch (action.type) {
    // Get_All Actions
    case jobConstants.GET_ALL_REQUEST:
      return {
        loading: true
      };
    case jobConstants.GET_ALL_SUCCESS:
      return {
        jobs: action.jobs
      };
    case jobConstants.GET_ALL_FAILURE:
      return {
        error: action.error
      };

    // Select_By_Id Actions
    case jobConstants.SELECT_BY_ID_REQUEST:
      return {};

    case jobConstants.SELECT_BY_ID_SUCCESS:
      return {
        selectedJob: action.job
      };

    case jobConstants.SELECT_BY_ID_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
}
