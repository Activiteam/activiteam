import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./../../logo.svg";
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </header>
    );
  }
}

export default Header;
