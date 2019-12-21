import request from "../utilis/ApiCentral";
import { from } from "rxjs";

export function getAuthors() {
  return from(
    request(
      {
        url: `/authors`,
        method: "GET"
      },
      true
    )
  );
}

export function getSingleAuthor(id) {
  return from(
    request(
      {
        url: `/authors/${id}`,
        method: "GET"
      },
      true
    )
  );
}

export function createAuthor(data) {
  return from(
    request(
      {
        url: `/authors`,
        method: "POST",
        data
      },
      true
    )
  );
}

export function updateAuthor(data) {
  return from(
    request(
      {
        url: `/authors/${data.id}`,
        method: "PUT",
        data
      },
      true
    )
  );
}
