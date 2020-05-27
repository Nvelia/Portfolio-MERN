import {
  ADD_WORK,
  FETCH_WORKS,
  DELETE_WORK,
  UPDATE_WORK,
  WORKS_UNLOAD,
} from "./../actions/types";

const initialState = { workList: [] };

export default function WorkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WORK:
      return { ...state };

    case FETCH_WORKS:
      return { ...state, workList: action.payload };

    case DELETE_WORK:
      const newWorkList = state.workList.filter((work) => {
        if (work._id === action.payload) {
          return false;
        } else {
          return true;
        }
      });

      return {
        ...state,
        workList: newWorkList,
      };

    case UPDATE_WORK:
      return state;

    case WORKS_UNLOAD:
      return {
        workList: [],
      };

    default:
      return state;
  }
}
