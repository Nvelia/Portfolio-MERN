import axios from "axios";

import { SET_AUTHENTICATION } from "./types";

export function setAuthentication(isLoggedIn) {
  return {
    type: SET_AUTHENTICATION,
    payload: isLoggedIn
  };
}

export function login(loginData, history) {
  return function(dispatch) {
    axios
      .post(`/members/login`, loginData)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch(setAuthentication(true));
        history.push("/administration");
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function logout() {
  return function(dispatch) {
    dispatch(setAuthentication(false));
    localStorage.removeItem("token");
  };
}
