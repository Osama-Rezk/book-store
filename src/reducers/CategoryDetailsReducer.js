import {
  FETCH_SINGLE_CATEGORY,
  START_FETCH_SINGLE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
  NEW_CATEGORY_FAILED,
  FETCH_SINGLE_CATEGORY_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  category: {},
  loading: false,
  updateError: "",
  newError: "",
  error: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SINGLE_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false
      };

    case START_FETCH_SINGLE_CATEGORY:
      return {
        ...state,
        loading: true
      };

    case FETCH_SINGLE_CATEGORY_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload
      };

    case NEW_CATEGORY_FAILED:
      return {
        ...state,
        loading: true,
        newError: action.payload
      };

    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        loading: true,
        updateError: action.payload
      };
    default:
      return state;
  }
};
