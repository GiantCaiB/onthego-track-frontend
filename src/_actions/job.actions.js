import { jobConstants } from "../_constants";
import { jobService } from '../_services';
import { alertActions } from "./";
import { history } from '../_helpers';

export const jobActions = {
  create,
  getAll,
  getById
  //update,
  //delete: _delete
};

function create(job) {
  return dispatch => {
    dispatch(request(job));

    jobService.create(job)
      .then(
        job => {
          dispatch(success());
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(job) { return { type: jobConstants.CREATE_REQUEST, job } }
  function success(job) { return { type: jobConstants.CREATE_SUCCESS, job } }
  function failure(error) { return { type: jobConstants.CREATE_FAILURE, error } }

}

function getAll() {
  return dispatch => {
    dispatch(request());

    jobService.getAll()
      .then(
        jobs => dispatch(success(jobs)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: jobConstants.GET_ALL_REQUEST } }
  function success(jobs) { return { type: jobConstants.GET_ALL_SUCCESS, jobs } }
  function failure(error) { return { type: jobConstants.GET_ALL_FAILURE, error } }
}

function getById(id) {
  return dispatch => {
    dispatch(request());

    jobService.getById(id)
      .then(
        job => dispatch(success(job)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request(id) { return { type: jobConstants.SELECT_BY_ID_REQUEST, id } }
  function success(job) { return { type: jobConstants.SELECT_BY_ID_SUCCESS, job } }
  function failure(error) { return { type: jobConstants.SELECT_BY_ID_FAILURE, error } }
}
