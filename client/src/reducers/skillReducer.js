import {
  ADD_SKILL,
  FETCH_SKILLS,
  DELETE_SKILL,
  UPDATE_SKILL,
  SKILLS_UNLOAD,
  SKILLS_REQUEST
} from "./../actions/types";

export default function SkillReducer(
  state = { skills: null, isFetching: false },
  action
) {
  switch (action.type) {
    case ADD_SKILL:
      return { ...state };

    case FETCH_SKILLS:
      return {
        ...state,
        skills: action.payload,
        isFetching: false
      };

    case SKILLS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => {
          if (skill._id === action.payload) {
            return false;
          } else {
            return true;
          }
        })
      };

    case UPDATE_SKILL:
      return state;

    case SKILLS_UNLOAD:
      return {
        ...state,
        skills: null,
        isFetching: false
      };

    default:
      return state;
  }
}
