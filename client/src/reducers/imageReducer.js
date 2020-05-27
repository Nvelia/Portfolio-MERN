import {
  ADD_IMAGE,
  FETCH_IMAGE,
  UPDATE_IMAGE,
  IMAGE_UNLOAD,
  IMAGE_REQUEST
} from "./../actions/types";

export default function ImageReducer(
  state = { image: null, isFetching: false },
  action
) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state
      };

    case FETCH_IMAGE:
      return {
        ...state,
        image: action.payload,
        isFetching: false
      };

    case UPDATE_IMAGE:
      return state;

    case IMAGE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case IMAGE_UNLOAD:
      return {
        ...state,
        image: null,
        isFetching: false
      };

    default:
      return state;
  }
}
