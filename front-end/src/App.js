import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Store from './components/store'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/store" component={Store} />
      </Switch>
    );
  }
}

export default App;
