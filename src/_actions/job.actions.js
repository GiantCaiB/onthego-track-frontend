import { jobConstants } from "../_constants";
import { alertActions, userActions } from "./";
import {authHeader} from "../_helpers";

export const jobActions = {
    create,
    getAll
    //update,
    //delete: _delete
};

let auth_header = authHeader();

function create(options) {
    return async dispatch => {
        try {
            const createOptions = {
                method: "POST",
                headers: auth_header,
                body: JSON.stringify(options)
            };
            const res = await fetch("https://onthego-track-backend.herokuapp.com/api/job/create", createOptions);
            // check auth
            await userActions.handleResponse(res);
            dispatch(alertActions.success("New Job has been added successfully!"));
        } catch (err) {
            const msg = err.toString();
            dispatch(alertActions.error(msg));
        }
    };
}

function getAll() {
    return async dispatch => {
        try {
            const getAllOptions = {
                method: "GET",
                headers: auth_header
            };
            const res = await fetch("https://onthego-track-backend.herokuapp.com/api/job/", getAllOptions);
            const jobs = await userActions.handleResponse(res);
            dispatch({ type: jobConstants.GET_ALL_SUCCESS, jobs });
            // TODO
        } catch (err) {
            const msg = err.toString();
            dispatch({ type: jobConstants.GET_ALL_FAILURE, msg });
            dispatch(alertActions.error(msg));
        }
    };
}