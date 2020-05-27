import axios from "axios";
import { addFlashMessage } from "./flashMessageActions";
import {
  ADD_WORK,
  FETCH_WORKS,
  DELETE_WORK,
  UPDATE_WORK,
  SAVE_WORK,
  // ADD_IMAGE,
  // UPDATE_IMAGE,
  GET_ERRORS,
  WORKS_UNLOAD
} from "./types";

// export function addWork(workData, imageData, history) {
//   return function(dispatch) {
//     axios
//       .post(`/images/add`, imageData)
//       .then(response => {
//         dispatch({
//           type: ADD_IMAGE,
//           payload: response.data
//         });
//         workData.image = response.data;
//         return axios.post(`/works/add`, workData);
//       })
//       .then(response => {
//         dispatch({
//           type: ADD_WORK,
//           payload: response.data
//         });
//         history.push("/administration");
//         dispatch(
//           addFlashMessage({
//             type: "success",
//             text: "Création ajoutée."
//           })
//         );
//       })
//       .catch(err => {
//         console.log(err.response);
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         });
//       });
//   };
// }

export function addWork(workData, history) {
  return function(dispatch) {
    axios
      .post(`/works/add`, workData)
      .then(response => {
        dispatch({
          type: ADD_WORK,
          payload: response.data
        });
        history.push("/administration");
        dispatch(
          addFlashMessage({
            type: "success",
            text: "Création ajoutée."
          })
        );
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
}

export function fetchWorks() {
  return function(dispatch) {
    axios
      .get(`/works/`)
      .then(response => {
        dispatch({
          type: FETCH_WORKS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function deleteWork(id) {
  return function(dispatch) {
    axios
      .delete(`/works/${id}`)
      .then(response => {
        dispatch({ type: DELETE_WORK, payload: id });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

// export function updateWork(imageId, imageData, workId, workData, history) {
//   return function(dispatch) {
//     axios
//       .post(`/images/${imageId}`, imageData)
//       .then(response => {
//         dispatch({
//           type: UPDATE_IMAGE,
//           paylod: imageId
//         });
//         return axios.post(`/works/${workId}`, workData);
//       })
//       .then(response => {
//         dispatch({ type: UPDATE_WORK, payload: workId });
//         history.push("/administration");
//         dispatch(
//           addFlashMessage({
//             type: "success",
//             text: "Création modifiée."
//           })
//         );
//       })
//       .catch(err => {
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         });
//       });
//   };
// }

export function updateWork(workId, workData, history) {
  return function(dispatch) {
    axios
      .put(`/works/${workId}`, workData)
      .then(response => {
        dispatch({ type: UPDATE_WORK, payload: workId });
        history.push("/administration");
        dispatch(
          addFlashMessage({
            type: "success",
            text: "Création modifiée."
          })
        );
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      });
  };
}

export function saveWorkInStore(work) {
  return function(dispatch) {
    dispatch({
      type: SAVE_WORK,
      payload: work
    });
  };
}

export const worksUnload = () => ({
  type: WORKS_UNLOAD
});
