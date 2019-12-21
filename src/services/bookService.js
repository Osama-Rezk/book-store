import request from "../utilis/ApiCentral";
import { from } from "rxjs";

export function getBooks() {
  return from(
    request({
      url: `/books`,
      method: "GET"
    })
  );
}

export function getSingleBook(id) {
  return from(
    request({
      url: `/books/${id}`,
      method: "GET"
    })
  );
}

export function createBook(data) {
  return from(
    request({
      url: `/books`,
      method: "POST",
      data
    })
  );
}

export function updateBook(data) {
  return from(
    request({
      url: `/books/${data.id}`,
      method: "PUT",
      data
    })
  );
}
