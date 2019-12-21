import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startNewBook } from "../actions";
import { Container } from "reactstrap";
import { BookForm } from "../components";

const NewBook = props => {
  const dispatch = useDispatch();

  const { categories, authors, newError: error } = useSelector(
    ({
      category: { categories },
      authors: { authors },
      book: { newError }
    }) => ({
      categories,
      authors,
      newError
    })
  );

  return (
    <Container>
      <h2>Add New Book</h2>

      <BookForm
        {...{ categories, authors, error }}
        onSubmit={values => dispatch(startNewBook(values))}
      />
    </Container>
  );
};

export default NewBook;
