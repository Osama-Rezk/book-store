import {
  NEW_AUTHOR,
  FETCH_AUTHORS_START,
  FETCH_AUTHORS_SUCCESS,
  FETCH_SINGLE_AUTHOR,
  START_FETCH_SINGLE_AUTHOR,
  UPDATE_AUTHOR,
  START_UPDATE_AUTHOR,
  START_NEW_AUTHOR,
  FETCH_AUTHORS_FAILED,
  NEW_AUTHOR_FAILED,
  UPDATE_AUTHOR_FAILED
} from "./types";

export function startFetchAuthors(payload) {
  return {
    type: FETCH_AUTHORS_START,
    payload
  };
}

export function fetchAuthorsSuccess(payload) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    payload
  };
}

export function fetchAuthorsFailed(payload) {
  return {
    type: FETCH_AUTHORS_FAILED,
    payload
  };
}

export function startFetchSingleAuthor(id) {
  return {
    type: START_FETCH_SINGLE_AUTHOR,
    id
  };
}

export function fetchSingleAuthorSuccess(payload) {
  return {
    type: FETCH_SINGLE_AUTHOR,
    payload
  };
}

export function fetchSingleAuthorFailed(payload) {
  return {
    type: FETCH_SINGLE_AUTHOR,
    payload
  };
}

export function startUpdateAuthor(id) {
  return {
    type: START_UPDATE_AUTHOR,
    id
  };
}

export function updateAuthorSuccess(payload) {
  return {
    type: UPDATE_AUTHOR,
    payload
  };
}

export function updateAuthorFailed(payload) {
  return {
    type: UPDATE_AUTHOR_FAILED,
    payload
  };
}

export function startNewAuthor(id) {
  return {
    type: START_NEW_AUTHOR,
    id
  };
}

export function newAuthorSuccess(payload) {
  return {
    type: NEW_AUTHOR,
    payload
  };
}

export function newAuthorFailed(payload) {
  return {
    type: NEW_AUTHOR_FAILED,
    payload
  };
}
