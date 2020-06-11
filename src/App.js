import React, { Component } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import "./App.css";
import Main from "./components/MainComponent";
class App extends Component {
  render() {
    return (
      <div className="App text-left">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Main />
      </div>
    );
  }
}

export default App;
