import axios from "axios";
import { addFlashMessage } from "./flashMessageActions";
import {
  ADD_WORK,
  FETCH_WORKS,
  DELETE_WORK,
  UPDATE_WORK,
  GET_ERRORS,
  WORKS_UNLOAD,
} from "./types";

export function addWork(workData, history) {
  return function (dispatch) {
    axios
      .post(`/works/add`, workData)
      .then((response) => {
        dispatch({
          type: ADD_WORK,
          payload: response.data,
        });
        history.push("/administration");
        return dispatch(
          addFlashMessage({
            type: "success",
            text: "Création ajoutée.",
          })
        );
      })
      .catch((err) => {
        return dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
}

export function fetchWorks() {
  return function (dispatch) {
    axios
      .get(`/works/`)
      .then((response) => {
        return dispatch({
          type: FETCH_WORKS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteWork(id) {
  return function (dispatch) {
    axios
      .delete(`/works/${id}`)
      .then(() => {
        return dispatch({ type: DELETE_WORK, payload: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function updateWork(workId, workData, history) {
  return function (dispatch) {
    axios
      .put(`/works/${workId}`, workData)
      .then(() => {
        dispatch({ type: UPDATE_WORK, payload: workId });
        history.push("/administration");
        return dispatch(
          addFlashMessage({
            type: "success",
            text: "Création modifiée.",
          })
        );
      })
      .catch((err) => {
        return dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
}

export const worksUnload = () => ({
  type: WORKS_UNLOAD,
});
