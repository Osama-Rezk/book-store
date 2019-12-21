import {
  NEW_CATEGORY,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_SINGLE_CATEGORY,
  UPDATE_CATEGORY,
  START_FETCH_SINGLE_CATEGORY,
  START_NEW_CATEGORY,
  START_UPDATE_CATEGORY,
  NEW_CATEGORY_FAILED,
  UPDATE_CATEGORY_FAILED,
  FETCH_SINGLE_CATEGORY_FAILED,
  FETCH_CATEGORIES_FAILED
} from "./types";

export function fetchCategoriesSuccess(payload) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload
  };
}

export function fetchCategoriesFailed(payload) {
  return {
    type: FETCH_CATEGORIES_FAILED,
    payload
  };
}

export function startFetchCategories(payload) {
  return {
    type: FETCH_CATEGORIES_START,
    payload
  };
}

export function fetchSingleCategorySuccess(payload) {
  return {
    type: FETCH_SINGLE_CATEGORY,
    payload
  };
}

export function startFetchSingleCategory(id) {
  return {
    type: START_FETCH_SINGLE_CATEGORY,
    id
  };
}

export function fetchSingleCategoryFailed(payload) {
  return {
    type: FETCH_SINGLE_CATEGORY_FAILED,
    payload
  };
}

export function startUpdateCategory(id) {
  return {
    type: START_UPDATE_CATEGORY,
    id
  };
}

export function updateCategorySuccess(payload) {
  return {
    type: UPDATE_CATEGORY,
    payload
  };
}

export function updateCategoryFailed(payload) {
  return {
    type: UPDATE_CATEGORY_FAILED,
    payload
  };
}

export function startNewCategory(id) {
  return {
    type: START_NEW_CATEGORY,
    id
  };
}

export function newCategorySuccess(payload) {
  return {
    type: NEW_CATEGORY,
    payload
  };
}

export function newCategoryFailed(payload) {
  return {
    type: NEW_CATEGORY_FAILED,
    payload
  };
}
