import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_DETAILS_SUCCESS,
  START_FETCH_SINGLE_BOOK,
  NEW_BOOK,
  NEW_BOOK_START,
  UPDATE_BOOK_START,
  UPDATE_BOOK,
  FETCH_BOOKS_FAILED,
  FETCH_SINGLE_BOOK_FAILED,
  NEW_BOOK_FAILED,
  UPDATE_BOOK_FAILED
} from "./types";

export function startFetchBooks(payload) {
  return {
    type: FETCH_BOOKS_START,
    payload
  };
}

export function fetchBooksSuccess(payload) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload
  };
}

export function fetchBooksFailed(payload) {
  return {
    type: FETCH_BOOKS_FAILED,
    payload
  };
}

export function startFetchSignleBook(id) {
  return {
    type: START_FETCH_SINGLE_BOOK,
    id
  };
}

export function fetchSignleBookSuccess(payload) {
  return {
    type: FETCH_BOOK_DETAILS_SUCCESS,
    payload
  };
}

export function fetchSignleBookFailed(payload) {
  return {
    type: FETCH_SINGLE_BOOK_FAILED,
    payload
  };
}

export function startUpdateBook(id) {
  return {
    type: UPDATE_BOOK_START,
    id
  };
}

export function updateBookSuccess(payload) {
  return {
    type: UPDATE_BOOK,
    payload
  };
}

export function updateBookFailed(payload) {
  return {
    type: UPDATE_BOOK_FAILED,
    payload
  };
}

export function startNewBook(id) {
  return {
    type: NEW_BOOK_START,
    id
  };
}

export function newBookSuccess(payload) {
  console.log(payload);
  return {
    type: NEW_BOOK,
    payload
  };
}

export function newBookFailed(payload) {
  console.log(payload);

  return {
    type: NEW_BOOK_FAILED,
    payload
  };
}
