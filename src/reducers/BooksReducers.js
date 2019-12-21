import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_START,
  FETCH_BOOKS_FAILED,
  NEW_BOOK,
  UPDATE_BOOK
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOKS_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case NEW_BOOK:
      return {
        ...state,
        data: [action.payload.data, ...state.data]
      };

    case UPDATE_BOOK:
      const index = state.data.findIndex(h => h.id === action.payload.id);
      if (index >= 0) {
        const data = [
          ...state.data.slice(0, index),
          action.payload,
          ...state.data.slice(index + 1)
        ];
        return { ...state, data };
      }
      return state;

    default:
      return state;
  }
};
