import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentMain from './component/index'
import {PropsTestMain} from './props-state/props'
import {TodoListComponent} from './props-state/state'
import ReduxApp from './redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentMain></ComponentMain>
        <PropsTestMain></PropsTestMain>
        <TodoListComponent></TodoListComponent>
        <ReduxApp></ReduxApp>
      </div>
    );
  }
}

export default App;
