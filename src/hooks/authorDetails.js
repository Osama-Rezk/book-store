import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startFetchSingleAuthor } from "../actions";
import { AuthorCard, BookList, Loader } from "../components";
import { data } from "../utilis";

const AuthorDetails = props => {
  const {
    match: { params: { id = "" } = {} }
  } = props;

  const dispatch = useDispatch();

  const { author, editMode, loading } = useSelector(
    ({ author: { author, loading }, global: { editMode } }) => ({
      author,
      editMode,
      loading
    })
  );

  const goTo = (id, destination) => props.history.push(`/${destination}/${id}`);

  useEffect(() => {
    dispatch(startFetchSingleAuthor(id));
  }, [id, dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <AuthorCard author={author} navigate={goTo} showButton={editMode} />
      <div className="break-line" />

      <div className="allteams-container">
        <BookList {...{ goTo, editMode, data }} />
      </div>
    </div>
  );
};

export default AuthorDetails;
