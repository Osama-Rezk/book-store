import React, { useEffect } from "react";
import { startFetchSingleCategory } from "../actions";
import { Button, BookList, Loader } from "../components";
import { Row } from "reactstrap";
import { data } from "../utilis";
import { useSelector, useDispatch } from "react-redux";

const CategoryDetails = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const { category = {}, editMode, loading } = useSelector(
    ({ singleCategory: { category, loading }, global: { editMode } }) => ({
      category,
      editMode,
      loading
    })
  );

  const goTo = (id, destination) => props.history.push(`/${destination}/${id}`);

  useEffect(() => {
    dispatch(startFetchSingleCategory(id));
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <Row>
        <h1>{category.name}</h1>
        {editMode && (
          <Button text="Edit" onClick={() => goTo(id, "editcategory")} />
        )}
      </Row>
      <div className="break-line" />

      <div className="allteams-container">
        <BookList {...{ goTo, editMode, data }} />
      </div>
    </div>
  );
};

export default CategoryDetails;
