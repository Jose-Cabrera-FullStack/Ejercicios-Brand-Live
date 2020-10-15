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
import Footer from "../components/Footer";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default connect(null, null)(App);
