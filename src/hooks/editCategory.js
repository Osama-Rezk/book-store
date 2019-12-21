import React, { useEffect } from "react";
import { startFetchSingleCategory, startUpdateCategory } from "../actions";
import { Container } from "reactstrap";
import { CategoryForm, Loader } from "../components";
import { useSelector, useDispatch } from "react-redux";

const NewCategory = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const { category, loading } = useSelector(
    ({ singleCategory: { category, loading } }) => ({
      category,
      loading
    })
  );

  useEffect(() => {
    if (id) {
      dispatch(startFetchSingleCategory(id));
    }
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <h2>Edit Category</h2>

      <CategoryForm
        onSubmit={values => dispatch(startUpdateCategory(values))}
        category={category}
      />
    </Container>
  );
};

export default NewCategory;
