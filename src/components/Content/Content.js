import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Items from "../../pages/Items";
import ItemPage from "../../pages/ItemPage/ItemPage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NewItem from "../../pages/NewItem/NewItem";
import AccountReview from "../../pages/AccountReview/AccountReview";
import PageRules from "../../pages/PageRules/PageRules";
import { Favorites } from "../../features/favorites/Favorites"

export default () => (
  <Switch>
    <Redirect exact from="/" to="/items" />

    <Route exact path="/item">
      <ItemPage />
    </Route>

    <Route exact path="/items">
      <Items />
    </Route>

    <Route exact path="/login">
      <Login />
    </Route>

    <Route exact path="/register">
      <Register />
    </Route>

    <Route exact path="/newitem">
      <NewItem />
    </Route>

    <Route exact path="/accountinfo">
      <AccountReview />
    </Route>

    <Route exact path="/pagerules">
      <PageRules />
    </Route>

    <Route exact path="/favorites">
      <Favorites />
    </Route>



    {/* <Route exact path="/products/:id">
      <ProductPage />
    </Route> */}

    <Route>
      <h1>Puslapis nerastas!</h1>
    </Route>
  </Switch>
);
