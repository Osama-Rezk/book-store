import {
  FETCH_BOOKS_START,
  START_FETCH_SINGLE_BOOK,
  UPDATE_BOOK_START,
  NEW_BOOK_START
} from "../actions/types";
import { ofType } from "redux-observable";
import { switchMap, map, takeUntil, catchError } from "rxjs/operators";
import { getBooks, getSingleBook, createBook, updateBook } from "../services";
import { of } from "rxjs";

import {
  fetchBooksSuccess,
  fetchSignleBookSuccess,
  updateBookSuccess,
  newBookSuccess,
  fetchBooksFailed,
  fetchSignleBookFailed,
  updateBookFailed,
  newBookFailed
} from "../actions";

export const fetchBooks = action$ => {
  return action$.pipe(
    ofType(FETCH_BOOKS_START),
    switchMap(() => {
      return getBooks().pipe(
        map(response => fetchBooksSuccess(response)),
        catchError(error => of(fetchBooksFailed(error))),
        takeUntil(action$.pipe(ofType(FETCH_BOOKS_START)))
      );
    })
  );
};

export const fetchSingleBook = action$ => {
  return action$.pipe(
    ofType(START_FETCH_SINGLE_BOOK),
    switchMap(({ id }) => {
      return getSingleBook(id).pipe(
        map(response => fetchSignleBookSuccess(response)),
        catchError(error => of(fetchSignleBookFailed(error))),
        takeUntil(action$.pipe(ofType(START_FETCH_SINGLE_BOOK)))
      );
    })
  );
};

export const editBook = action$ => {
  return action$.pipe(
    ofType(UPDATE_BOOK_START),
    switchMap(({ id }) => {
      return updateBook(id).pipe(
        map(response => updateBookSuccess(response)),
        catchError(error => of(updateBookFailed(error))),
        takeUntil(action$.pipe(ofType(UPDATE_BOOK_START)))
      );
    })
  );
};

export const newBook = action$ => {
  return action$.pipe(
    ofType(NEW_BOOK_START),
    switchMap(({ id }) => {
      return createBook(id).pipe(
        map(response => newBookSuccess(response)),
        catchError(error => of(newBookFailed(error))),
        takeUntil(action$.pipe(ofType(NEW_BOOK_START)))
      );
    })
  );
};
