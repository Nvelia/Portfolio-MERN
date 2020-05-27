import { combineReducers } from "redux";
import AuthenticationReducer from "./authReducer";
import SkillReducer from "./skillReducer";
import WorkReducer from "./workReducer";
import errorReducer from "./errorReducer";
import flashMessageReducer from "./flashMessagesReducer";
import componentsVisibilityReducer from "./componentsVisibilityReducer";
import modalReducer from "./modalReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  errors: errorReducer,
  auth: AuthenticationReducer,
  work: WorkReducer,
  skill: SkillReducer,
  flashMessages: flashMessageReducer,
  componentsVisibility: componentsVisibilityReducer,
  modal: modalReducer,
  form: formReducer,
});

export default rootReducer;
