import {
  FETCH_AUTHORS_START,
  START_FETCH_SINGLE_CATEGORY,
  START_NEW_CATEGORY,
  START_UPDATE_CATEGORY
} from "../actions/types";
import { ofType } from "redux-observable";
import { switchMap, map, takeUntil, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  getCategories,
  getSingleCategory,
  updateCategory,
  createCategory
} from "../services";
import {
  fetchCategoriesSuccess,
  fetchSingleCategorySuccess,
  newCategorySuccess,
  updateCategorySuccess,
  fetchCategoriesFailed,
  fetchSingleCategoryFailed,
  updateCategoryFailed,
  newCategoryFailed
} from "../actions";

export const fetchCategories = action$ => {
  return action$.pipe(
    ofType(FETCH_AUTHORS_START),
    switchMap(() => {
      return getCategories().pipe(
        map(response => fetchCategoriesSuccess(response)),
        catchError(error => of(fetchCategoriesFailed(error))),

        takeUntil(action$.pipe(ofType(FETCH_AUTHORS_START)))
      );
    })
  );
};

export const fetchSingleCategory = action$ => {
  return action$.pipe(
    ofType(START_FETCH_SINGLE_CATEGORY),
    switchMap(({ id }) => {
      return getSingleCategory(id).pipe(
        map(response => fetchSingleCategorySuccess(response)),
        catchError(error => of(fetchSingleCategoryFailed(error))),

        takeUntil(action$.pipe(ofType(START_FETCH_SINGLE_CATEGORY)))
      );
    })
  );
};

export const editCategory = action$ => {
  return action$.pipe(
    ofType(START_UPDATE_CATEGORY),
    switchMap(({ id }) => {
      return updateCategory(id).pipe(
        map(response => updateCategorySuccess(response)),
        catchError(error => of(updateCategoryFailed(error))),

        takeUntil(action$.pipe(ofType(START_UPDATE_CATEGORY)))
      );
    })
  );
};

export const newCategory = action$ => {
  return action$.pipe(
    ofType(START_NEW_CATEGORY),
    switchMap(({ id }) => {
      return createCategory(id).pipe(
        map(response => newCategorySuccess(response)),
        catchError(error => of(newCategoryFailed(error))),

        takeUntil(action$.pipe(ofType(START_NEW_CATEGORY)))
      );
    })
  );
};
