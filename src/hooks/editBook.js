import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetchSignleBook, startUpdateBook } from "../actions";
import { Container } from "reactstrap";
import { BookForm, Loader } from "../components";

const EditBook = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const {
    book,
    categories,
    authors,
    loading,
    updateError: error
  } = useSelector(
    ({
      book: { book, loading, updateError },
      category: { categories },
      authors: { authors }
    }) => ({
      book,
      loading,
      updateError,
      categories,
      authors
    })
  );

  useEffect(() => {
    if (id) {
      dispatch(startFetchSignleBook(id));
    }
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <h2>Edit Book</h2>

      <BookForm
        {...{ categories, authors, book, error }}
        onSubmit={values => dispatch(startUpdateBook(values))}
      />
    </Container>
  );
};

export default EditBook;
