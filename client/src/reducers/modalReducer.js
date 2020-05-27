import { SET_MODAL_STATE, MODAL_UNLOAD } from "../actions/types";

export default function modalReducer(
  state = {
    opened: false,
  },
  action
) {
  switch (action.type) {
    case SET_MODAL_STATE:
      return {
        ...state,
        opened: action.data.opened,
      };
    case MODAL_UNLOAD:
      return {
        ...state,
        opened: false,
      };
    default:
      return state;
  }
}
