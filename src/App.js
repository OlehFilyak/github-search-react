import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/pages/Home";
import "./App.scss";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="App">
          <Home />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
