import { SET_MODAL_STATE, MODAL_UNLOAD } from "./types";

export const setModalState = (opened) => {
  return (dispatch) => {
    dispatch({
      type: SET_MODAL_STATE,
      data: { opened },
    });
  };
};

export const modalUnload = () => ({
  type: MODAL_UNLOAD,
});
