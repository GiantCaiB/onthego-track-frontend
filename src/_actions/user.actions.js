import { userConstants } from "../_constants";
import { alertActions } from "./";
import { history } from "../_helpers";
import {authHeader} from "../_helpers";

export const userActions = {
  login,
  logout,
  getAll
};

let auth_header = authHeader();

function login(username, password) {
  return async dispatch => {
    try {
      const loginOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      };
      const res = await fetch("https://onthego-track-backend.herokuapp.com/api/auth/login", loginOptions);
      const user = await handleResponse(res);
      dispatch({ type: userConstants.LOGIN_REQUEST, user });
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }
      dispatch({ type: userConstants.LOGIN_SUCCESS, user });
      history.push("/");
    } catch (err) {
      const msg = err.toString();
      dispatch({ type: userConstants.LOGIN_FAILURE, msg });
      dispatch(alertActions.error(msg));
    }
  };
}

function logout() {
  localStorage.removeItem("user");
  return { type: userConstants.LOGOUT };
}

function getAll() {
  return async dispatch => {
    try {
      const getAllOptions = {
        method: "GET",
        headers: auth_header
      };
      const res = await fetch("https://onthego-track-backend.herokuapp.com/api/auth/getAll", getAllOptions);
       return await handleResponse(res);
    } catch (err) {
      const msg = err.toString();
      dispatch(alertActions.error(msg));
    }
  };
}

function handleResponse(res) {
  return res.text().then(text => {
    const data = text && JSON.parse(text);
    if (!res.ok) {
      if (res.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }
      const err = (data && data.message) || res.statusText;
      return Promise.reject(err);
    }
    return data;
  });
}
