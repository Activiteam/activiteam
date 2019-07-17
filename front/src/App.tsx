import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter/MainRouter';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';

class App extends Component<{}, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    );
  }
}

export default App;
