import {
  ADD_SKILL,
  FETCH_SKILLS,
  DELETE_SKILL,
  UPDATE_SKILL,
  SKILLS_UNLOAD,
} from "./../actions/types";

export default function SkillReducer(state = { skills: null }, action) {
  switch (action.type) {
    case ADD_SKILL:
      return { ...state };

    case FETCH_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((skill) => {
          if (skill._id === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };

    case UPDATE_SKILL:
      return state;

    case SKILLS_UNLOAD:
      return {
        ...state,
        skills: null,
      };

    default:
      return state;
  }
}
