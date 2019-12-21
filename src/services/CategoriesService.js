import request from "../utilis/ApiCentral";
import { from } from "rxjs";

export function getCategories() {
  return from(
    request(
      {
        url: `/categories`,
        method: "GET"
      },
      true
    )
  );
}

export function getSingleCategory(id) {
  return from(
    request(
      {
        url: `/categories/${id}`,
        method: "GET"
      },
      true
    )
  );
}

export function createCategory(data) {
  return from(
    request(
      {
        url: `/categories`,
        method: "POST",
        data
      },
      true
    )
  );
}

export function updateCategory(data) {
  return from(
    request(
      {
        url: `/categories/${data.id}`,
        method: "PUT",
        data
      },
      true
    )
  );
}
