import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/pages/Home";
import { Profile } from "./Components/pages/Profile";
import { About } from "./Components/pages/About";
import "./App.scss";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile:name" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
