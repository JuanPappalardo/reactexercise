import React, { Component } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App text-left">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
