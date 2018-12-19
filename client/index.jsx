import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./components/main.jsx";

class App extends Component {
  render() {
    return <Main />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
