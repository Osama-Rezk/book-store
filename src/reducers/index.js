import { combineReducers } from "redux";

import BooksReducers from "./BooksReducers";
import BookDetails from "./BookDetails";
import AuthorsReducer from "./AuthorsReducer";
import GlobalReducer from "./GlobalReducer";
import CategoriesReducer from "./CategoriesReducer";
import AuthorDetailsReducer from "./AuthorDetailsReducer";
import CategoryDetailsReducer from "./CategoryDetailsReducer";

export default combineReducers({
  books: BooksReducers,
  book: BookDetails,
  authors: AuthorsReducer,
  author: AuthorDetailsReducer,
  global: GlobalReducer,
  category: CategoriesReducer,
  singleCategory: CategoryDetailsReducer
});
