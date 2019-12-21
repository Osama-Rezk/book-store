import {
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_FAILED,
  FETCH_AUTHORS_START,
  NEW_AUTHOR,
  UPDATE_AUTHOR
} from "../actions/types";

const INITIAL_STATE = {
  authors: [],
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTHORS_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        authors: action.payload,
        loading: false
      };

    case FETCH_AUTHORS_FAILED:
      return {
        ...state,
        loading: false
      };

    case NEW_AUTHOR:
      return {
        ...state,
        authors: [action.payload, ...state.authors]
      };

    case UPDATE_AUTHOR:
      const index = state.authors.findIndex(h => h.id === action.payload.id);
      if (index >= 0) {
        const authors = [
          ...state.authors.slice(0, index),
          action.payload,
          ...state.authors.slice(index + 1)
        ];
        return { ...state, authors };
      }
      return state;

    default:
      return state;
  }
};
