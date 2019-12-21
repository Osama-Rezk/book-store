import React from "react";
import Book from "../book";

const BookList = ({ data, goTo, editMode }) =>
  data.map((book, i) => (
    <Book key={i} book={book} navigate={goTo} showButton={editMode} />
  ));

export default BookList;
