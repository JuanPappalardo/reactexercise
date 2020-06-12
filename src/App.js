import React, { Component } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
class App extends Component {
  render() {
    return (
      <div className="App text-left">
        <Main />
      </div>
    );
  }
}

export default App;
