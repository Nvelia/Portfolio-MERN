import axios from "axios";

import { FETCH_IMAGE, IMAGE_REQUEST, IMAGE_UNLOAD } from "./types";

export function getImage(id) {
  return function(dispatch) {
    dispatch(imagesRequest());
    axios
      .get(`/images/${id}`)
      .then(response => {
        dispatch({
          type: FETCH_IMAGE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export const imagesRequest = () => ({
  type: IMAGE_REQUEST
});

export const imagesUnload = () => ({
  type: IMAGE_UNLOAD
});
