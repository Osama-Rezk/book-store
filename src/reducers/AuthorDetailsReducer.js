import {
  FETCH_SINGLE_AUTHOR,
  START_FETCH_SINGLE_AUTHOR
} from "../actions/types";

const INITIAL_STATE = {
  author: {},
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SINGLE_AUTHOR:
      return {
        ...state,
        author: action.payload,
        loading: false
      };

    case START_FETCH_SINGLE_AUTHOR:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
