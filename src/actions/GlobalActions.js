import { TOGGLE_EDIT_MODE } from "./types";

export function toggleEditMode(payload) {
  return {
    type: TOGGLE_EDIT_MODE,
    payload
  };
}
