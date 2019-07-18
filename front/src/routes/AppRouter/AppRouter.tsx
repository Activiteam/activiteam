import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Home from '../../Home/Home';
import Header from '../../components/Header/Header';
import SignUp from '../../SignUp/SignUp';

class AppRouter extends Component<{}, {}> {

  public render() {
    return (
      <div className="main-component">
        <Header></Header>
        <HashRouter>
          <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/signup" component={SignUp} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default AppRouter;
