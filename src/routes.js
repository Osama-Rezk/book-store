import React from "react";
import { Route, Switch } from "react-router-dom";
import BookDetails from "./hooks/bookDetails";

import AuthorDetails from "./hooks/authorDetails";

import CategoryDetails from "./hooks/categoryDetails";

import Home from "./hooks/home";
import NewBook from "./hooks/newBook";
import EditBook from "./hooks/editBook";

import NewCategory from "./hooks/newCategory";
import EditCategory from "./hooks/editCategory";

import NewAuthor from "./hooks/newAuthor";
import EditAuthor from "./hooks/editAuthor";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route path={"/bookdetails/:id"} component={BookDetails} />
    <Route path={"/categorydetails/:id"} component={CategoryDetails} />

    <Route path={"/authordetails/:id"} component={AuthorDetails} />

    <Route path={"/newbook"} component={NewBook} />
    <Route path={"/editbook/:id"} component={EditBook} />

    <Route path={"/newauthor"} component={NewAuthor} />
    <Route path={"/editauthor/:id"} component={EditAuthor} />

    <Route path={"/newcategory/:id?"} component={NewCategory} />
    <Route path={"/editcategory/:id"} component={EditCategory} />
  </Switch>
);

export default Routes;
