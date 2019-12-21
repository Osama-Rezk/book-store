import React from "react";
import { startNewAuthor } from "../actions";
import { Container } from "reactstrap";
import { AuthorForm } from "../components";
import { useDispatch } from "react-redux";

const NewAuthor = props => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Add New Author</h2>
      <AuthorForm onSubmit={values => dispatch(startNewAuthor(values))} />
    </Container>
  );
};

export default NewAuthor;
