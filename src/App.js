import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./scss/main.scss";

import Header from "./components/header/Header";
import Section from "./components/header/Section";
import Body from "./components/body/Body";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" component={Header}></Route>
        <Route exact path="/" component={Section}></Route>
        <Route exact path="/" component={Body}></Route>
        <Switch>
          <Route exact path="/posts/:post_id" component={Post}></Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
