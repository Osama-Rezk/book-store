import React from "react";
import { startNewCategory } from "../actions";

import { CategoryForm } from "../components";
import { useDispatch } from "react-redux";

const NewCategory = props => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>New Category</h1>
      <CategoryForm onSubmit={values => dispatch(startNewCategory(values))} />
    </>
  );
};

export default NewCategory;
