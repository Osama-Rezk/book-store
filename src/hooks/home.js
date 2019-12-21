import React, { useEffect } from "react";
import { startFetchBooks } from "../actions";
import { BookList, Loader } from "../components";
import { Alert } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const Home = props => {
  const dispatch = useDispatch();

  const { data = [], editMode, loading, error } = useSelector(
    ({ books: { data, loading, error }, global: { editMode } }) => ({
      data,
      editMode,
      loading,
      error
    })
  );

  const goTo = (id, destination) => props.history.push(`/${destination}/${id}`);

  useEffect(() => {
    dispatch(startFetchBooks());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <>
      {error && <Alert color="danger">{JSON.stringify(error)}</Alert>}
      <BookList {...{ goTo, editMode, data }} />
    </>
  );
};

export default Home;
