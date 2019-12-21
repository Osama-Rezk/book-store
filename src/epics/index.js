import { combineEpics } from "redux-observable";
import {
  fetchCategories,
  fetchSingleCategory,
  editCategory,
  newCategory
} from "./categoriesEpic";
import {
  fetchAuthors,
  fetchSingleAuthor,
  editAuthor,
  newAuthor
} from "./authorsEpic";
import { fetchBooks, fetchSingleBook, editBook, newBook } from "./booksEpic";
export const rootEpic = combineEpics(
  fetchCategories,
  fetchAuthors,
  fetchBooks,
  fetchSingleBook,
  fetchSingleAuthor,
  fetchSingleCategory,
  editAuthor,
  newAuthor,
  editCategory,
  newCategory,
  editBook,
  newBook
);
