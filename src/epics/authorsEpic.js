import {
  FETCH_CATEGORIES_START,
  START_FETCH_SINGLE_AUTHOR,
  START_UPDATE_AUTHOR,
  START_NEW_AUTHOR
} from "../actions/types";
import { ofType } from "redux-observable";
import { switchMap, map, takeUntil, catchError } from "rxjs/operators";
import {
  getAuthors,
  getSingleAuthor,
  createAuthor,
  updateAuthor
} from "../services";
import {
  fetchAuthorsSuccess,
  fetchSingleAuthorSuccess,
  updateAuthorSuccess,
  newAuthorSuccess,
  fetchAuthorsFailed,
  newAuthorFailed,
  updateAuthorFailed,
  fetchSingleAuthorFailed
} from "../actions";
import { of } from "rxjs";

export const fetchAuthors = action$ => {
  return action$.pipe(
    ofType(FETCH_CATEGORIES_START),
    switchMap(() => {
      return getAuthors().pipe(
        map(response => fetchAuthorsSuccess(response)),
        catchError(error => of(fetchAuthorsFailed(error))),

        takeUntil(action$.pipe(ofType(FETCH_CATEGORIES_START)))
      );
    })
  );
};

export const fetchSingleAuthor = action$ => {
  return action$.pipe(
    ofType(START_FETCH_SINGLE_AUTHOR),
    switchMap(({ id }) => {
      return getSingleAuthor(id).pipe(
        map(response => fetchSingleAuthorSuccess(response)),
        catchError(error => of(fetchSingleAuthorFailed(error))),

        takeUntil(action$.pipe(ofType(START_FETCH_SINGLE_AUTHOR)))
      );
    })
  );
};

export const editAuthor = action$ => {
  return action$.pipe(
    ofType(START_UPDATE_AUTHOR),
    switchMap(({ id }) => {
      return updateAuthor(id).pipe(
        map(response => updateAuthorSuccess(response)),
        catchError(error => of(updateAuthorFailed(error))),

        takeUntil(action$.pipe(ofType(START_UPDATE_AUTHOR)))
      );
    })
  );
};

export const newAuthor = action$ => {
  return action$.pipe(
    ofType(START_NEW_AUTHOR),
    switchMap(({ id }) => {
      return createAuthor(id).pipe(
        map(response => newAuthorSuccess(response)),
        catchError(error => of(newAuthorFailed(error))),

        takeUntil(action$.pipe(ofType(START_NEW_AUTHOR)))
      );
    })
  );
};
