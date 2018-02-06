import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Store from './components/store'
import GameField from "./components/GameField";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/store" component={Store} />
          <Route path="/gamefield" component={GameField} />
        </Switch>
        <div className="App">
          <GameField />
        </div>
      </div>
    );
  }
}

export default App;
