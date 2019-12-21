import React, { useEffect } from "react";
import "./App.css";

import {
  startFetchCategories,
  startFetchAuthors,
  toggleEditMode
} from "./actions";
import { Header, Footer, SideBar } from "./components";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { useSelector, useDispatch } from "react-redux";

const App = props => {
  const dispatch = useDispatch();

  const {
    categories,
    authors,
    editMode,
    isCatLoading,
    isAuthLoading
  } = useSelector(
    ({
      global: { editMode },
      category: { categories, loading: isCatLoading },
      authors: { authors, loading: isAuthLoading }
    }) => ({
      editMode,
      categories,
      authors,
      isCatLoading,
      isAuthLoading
    })
  );

  const data = [
    {
      title: "Categories",
      href: "categorydetails",
      data: categories,
      loading: isCatLoading
    },
    {
      title: "Authors",
      href: "authordetails",
      data: authors,
      loading: isAuthLoading
    }
  ];

  useEffect(() => {
    dispatch(startFetchCategories());
    dispatch(startFetchAuthors());
  }, [dispatch]);

  const updateEditMode = () => dispatch(toggleEditMode());

  return (
    <BrowserRouter>
      <Container>
        <Header updateEditMode={updateEditMode} isEdit={editMode} />
        <Row>
          <Col xs="3" lg="3">
            <SideBar items={data} />
          </Col>
          <Col xs="9" lg="9">
            <Routes />
          </Col>
        </Row>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
