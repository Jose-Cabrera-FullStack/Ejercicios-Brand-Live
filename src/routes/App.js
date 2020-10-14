import React from "react";
import {
  BrowserRouter,
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import Home from "../containers/Home";
import Header from "../components/Header";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default connect(null, null)(App);
