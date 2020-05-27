import { combineReducers } from "redux";
import AuthenticationReducer from "./authReducer";
import CategoryReducer from "./categoryReducer";
import SkillReducer from "./skillReducer";
import WorkReducer from "./workReducer";
import ImageReducer from "./imageReducer";
import errorReducer from "./errorReducer";
import flashMessageReducer from "./flashMessagesReducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  auth: AuthenticationReducer,
  work: WorkReducer,
  category: CategoryReducer,
  skill: SkillReducer,
  image: ImageReducer,
  flashMessages: flashMessageReducer
});

export default rootReducer;
