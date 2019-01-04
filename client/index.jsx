import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.jsx";
import bootstrap from "bootstrap";
import $ from "jquery";
import popper from "popper.js";
import { Glyphicon } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
