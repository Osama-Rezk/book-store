import { TOGGLE_EDIT_MODE } from "../actions/types";

const INITIAL_STATE = {
  editMode: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };

    default:
      return state;
  }
};
