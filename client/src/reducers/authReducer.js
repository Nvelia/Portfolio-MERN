import { SET_AUTHENTICATION } from "./../actions/types";

const initialState = {
  isAuthenticated: false,
  token: null,
};

export default function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        isAuthenticated: action.authenticated,
        token: action.token,
      };
    default:
      return state;
  }
}
