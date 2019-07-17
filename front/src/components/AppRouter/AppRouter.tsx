import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';

class AppRouter extends Component<{}, {}> {

  public render() {
    return (
      <div className="main-component">
        <Header></Header>
        <HashRouter>
          <Switch>
          <Route exact={true} path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default AppRouter;
