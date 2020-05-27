import {
  ADD_CATEGORY,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  CATEGORIES_UNLOAD,
  CATEGORIES_REQUEST
} from "./../actions/types";

export default function CategoryReducer(
  state = { categories: null, isFetchingCategories: false },
  action
) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state
      };

    case FETCH_CATEGORIES:
      return {
        categories: action.payload,
        isFetchingCategories: false
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => {
          if (category._id === action.payload) {
            return false;
          } else {
            return true;
          }
        })
      };

    case UPDATE_CATEGORY:
      return state;

    case CATEGORIES_REQUEST:
      return {
        ...state,
        categories: null,
        isFetchingCategories: true
      };

    case CATEGORIES_UNLOAD:
      return {
        ...state,
        isFetchingCategories: false,
        categories: null
      };

    default:
      return state;
  }
}
