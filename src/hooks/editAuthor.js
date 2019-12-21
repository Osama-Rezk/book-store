import React, { useEffect } from "react";
import { startFetchSingleAuthor, startUpdateAuthor } from "../actions";
import { Container } from "reactstrap";
import { AuthorForm, Loader } from "../components";
import { useSelector, useDispatch } from "react-redux";

const EditAuthor = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const { author, loading } = useSelector(
    ({ author: { author, loading } }) => ({
      author,
      loading
    })
  );

  useEffect(() => {
    dispatch(startFetchSingleAuthor(id));
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <h2>Edit Author</h2>
      <AuthorForm
        onSubmit={values => dispatch(startUpdateAuthor(values))}
        author={author}
      />
    </Container>
  );
};

export default EditAuthor;
