import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Store from './components/store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/store" component={Store} />
        </Switch>
      </div>
    );
  }
}

export default App;
