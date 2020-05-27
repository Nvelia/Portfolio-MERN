import axios from "axios";

import {
  ADD_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  GET_ERRORS,
  CATEGORIES_UNLOAD,
  CATEGORIES_REQUEST
} from "./types";
import { addFlashMessage } from "./flashMessageActions";

export function addCategory(categoryData, history) {
  return function(dispatch) {
    axios
      .post(`/categories/add`, categoryData)
      .then(response => {
        dispatch({
          type: ADD_CATEGORY,
          payload: response.data
        });
        // console.log(response);
        history.push("/administration");
        dispatch(
          addFlashMessage({
            type: "success",
            text: "Catégorie ajoutée."
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

export function fetchCategories() {
  return function(dispatch) {
    dispatch(categoriesRequest());
    axios
      .get(`/categories/`)
      .then(response => {
        dispatch({
          type: FETCH_CATEGORIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function deleteCategory(id) {
  return function(dispatch) {
    axios
      .delete(`/categories/${id}`)
      .then(response => {
        dispatch({ type: DELETE_CATEGORY, payload: id });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function updateCategory(id, categoryData, history) {
  return function(dispatch) {
    axios
      .post(`/categories/${id}`, categoryData)
      .then(response => {
        dispatch({ type: UPDATE_CATEGORY, payload: id });
        history.push("/administration");
        dispatch(
          addFlashMessage({
            type: "success",
            text: "Catégorie modifiée."
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

export const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST
});

export const categoriesUnload = () => ({
  type: CATEGORIES_UNLOAD
});
