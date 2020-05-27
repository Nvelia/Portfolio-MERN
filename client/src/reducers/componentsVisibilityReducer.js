import { SET_COMPONENTS_VISIBILITY } from "../actions/types";

export default function componentsVisibilityReducer(
  state = {
    isHomepageVisible: false,
    isWorkpageVisible: false,
    isSkillpageVisible: false,
  },
  action
) {
  switch (action.type) {
    case SET_COMPONENTS_VISIBILITY:
      switch (action.data.page) {
        case "homepage":
          return {
            ...state,
            isHomepageVisible: true,
            isWorkpageVisible: false,
            isSkillpageVisible: false,
          };

        case "workpage":
          return {
            ...state,
            isHomepageVisible: false,
            isWorkpageVisible: true,
            isSkillpageVisible: false,
          };

        case "skillpage":
          return {
            ...state,
            isHomepageVisible: false,
            isWorkpageVisible: false,
            isSkillpageVisible: true,
          };
        default:
          return {
            ...state,
            isHomepageVisible: false,
            isWorkpageVisible: false,
            isSkillpageVisible: false,
          };
      }

    default:
      return state;
  }
}
