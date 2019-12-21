import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_START,
  NEW_CATEGORY,
  UPDATE_CATEGORY
} from "../actions/types";

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };

    case FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false
      };

    case NEW_CATEGORY:
      return {
        ...state,
        categories: [action.payload, ...state.categories]
      };

    case UPDATE_CATEGORY:
      const index = state.categories.findIndex(h => h.id === action.payload.id);
      if (index >= 0) {
        const categories = [
          ...state.categories.slice(0, index),
          action.payload,
          ...state.categories.slice(index + 1)
        ];
        return { ...state, categories };
      }
      return state;
    default:
      return state;
  }
};
