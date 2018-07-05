import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from './components/home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
