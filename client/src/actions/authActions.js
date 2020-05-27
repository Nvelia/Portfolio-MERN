import axios from "axios";

import { addFlashMessage } from "./flashMessageActions";
import { SET_AUTHENTICATION } from "./types";

export function setAuthentication(isLoggedIn, token) {
  return {
    type: SET_AUTHENTICATION,
    authenticated: isLoggedIn,
    token,
  };
}

export const userLoginAttempt = (loginData) => {
  return (dispatch) => {
    axios
      .post(`/members/login`, loginData)
      .then((response) => {
        return dispatch(setAuthentication(true, response.data.token));
      })
      .catch((err) => {
        if (err.response.status === 400) {
          return dispatch(
            addFlashMessage({
              type: "error",
              text: "Id or pass missing",
            })
          );
        } else {
          return dispatch(
            addFlashMessage({
              type: "error",
              text: "Incorrect id or pass",
            })
          );
        }
      });
  };
};
