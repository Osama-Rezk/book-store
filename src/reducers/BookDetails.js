import {
  FETCH_BOOK_DETAILS_SUCCESS,
  START_FETCH_SINGLE_BOOK,
  FETCH_SINGLE_BOOK_FAILED,
  NEW_BOOK_FAILED,
  UPDATE_BOOK_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  book: {
    category: "",
    author: "",
    title: "",
    description: "",
    isbn: "",
    pagesNumber: "",
    publishYear: "",
    image: ""
  },
  teams: [],
  loading: false,
  error: "",
  updateError: "",
  newError: "",
  newLoader: false,
  updateLoader: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH_SINGLE_BOOK:
      return {
        ...state,
        loading: true
      };

    case FETCH_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        book: action.payload,
        loading: false
      };

    case FETCH_SINGLE_BOOK_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case UPDATE_BOOK_FAILED:
      return {
        ...state,
        updateError: action.payload,
        updateLoader: false
      };

    case NEW_BOOK_FAILED:
      return {
        ...state,
        newLoader: false,
        newError: action.payload
      };

    default:
      return state;
  }
};
