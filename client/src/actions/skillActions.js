import axios from "axios";

import { addFlashMessage } from "./flashMessageActions";
import {
  ADD_SKILL,
  FETCH_SKILLS,
  DELETE_SKILL,
  UPDATE_SKILL,
  GET_ERRORS,
  SKILLS_UNLOAD,
} from "./types";

export function addSkill(skillData, history) {
  return function (dispatch) {
    axios
      .post(`/skills/add`, skillData)
      .then((response) => {
        dispatch({
          type: ADD_SKILL,
          payload: response.data,
        });
        history.push("/administration");
        return dispatch(
          addFlashMessage({
            type: "success",
            text: "Compétence ajoutée.",
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

export function fetchSkills() {
  return function (dispatch) {
    axios
      .get(`/skills/`)
      .then((response) => {
        return dispatch({
          type: FETCH_SKILLS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteSkill(id) {
  return function (dispatch) {
    axios.delete(`/skills/${id}`).then(() => {
      return dispatch({ type: DELETE_SKILL, payload: id });
    });
  };
}

export function updateSkill(id, skillData, history) {
  return function (dispatch) {
    axios
      .post(`/skills/${id}`, skillData)
      .then(() => {
        dispatch({ type: UPDATE_SKILL, payload: id });
        history.push("/administration");
        return dispatch(
          addFlashMessage({
            type: "success",
            text: "Compétence modifiée.",
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

export const skillsUnload = () => ({
  type: SKILLS_UNLOAD,
});
