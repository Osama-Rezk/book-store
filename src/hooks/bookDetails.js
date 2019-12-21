import React, { useEffect } from "react";
import { startFetchSignleBook } from "../actions";
import { BookInfoCard, BookList, Loader } from "../components";
import { data } from "../utilis";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "reactstrap";

const BookDetails = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const { book, editMode, loading, error } = useSelector(
    ({ book: { book, loading, error }, global: { editMode } }) => ({
      book,
      editMode,
      loading,
      error
    })
  );

  const goTo = (id, destination) => props.history.push(`/${destination}/${id}`);

  useEffect(() => {
    dispatch(startFetchSignleBook(id));
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <>
      {error && <Alert color="danger">{JSON.stringify(error)}</Alert>}
      <BookInfoCard book={book} navigate={goTo} showButton={editMode} />
      <div className="break-line" />

      <div className="allteams-container">
        <BookList {...{ goTo, editMode, data }} />
      </div>
    </>
  );
};

export default BookDetails;
