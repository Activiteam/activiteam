import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import AppRouter from '../AppRouter/AppRouter';
import Login from '../Login/Login';

class MainRouter extends Component<{}, {}> {

  public render() {
    return (
      <div className="main-component">
        <HashRouter>
          <Switch>
          <Route exact={true} path="/" component={AppRouter} />
          <Route exact={true} path="/login" component={Login} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default MainRouter;
