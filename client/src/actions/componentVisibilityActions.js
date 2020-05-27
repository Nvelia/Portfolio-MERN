import { SET_COMPONENTS_VISIBILITY } from "./types";

export const setComponentsVisibility = (page, isVisible) => {
  return (dispatch) => {
    dispatch({
      type: SET_COMPONENTS_VISIBILITY,
      data: { page, isVisible },
    });
  };
};
