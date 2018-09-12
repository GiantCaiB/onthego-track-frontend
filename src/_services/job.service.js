import { authHeader } from "../_helpers";
import { userService } from "./";

export const jobService = {
  create,
  getAll,
  update
};

function create(job) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(job)
  };
  return fetch(
    "https://onthego-track-backend.herokuapp.com/api/job/create",
    requestOptions
  ).then(userService.handleResponse);
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    "https://onthego-track-backend.herokuapp.com/api/job/",
    requestOptions
  ).then(userService.handleResponse);
}

function update(job) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(job)
  };

  return fetch(
    `https://onthego-track-backend.herokuapp.com/api/job/${job.id}`,
    requestOptions
  ).then(userService.handleResponse);
}
