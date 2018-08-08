import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChildComponent from './ChildComponent';
import ChildComponentB from './ChildComponentB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Blue Header</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  
        <ChildComponent></ChildComponent>
        <ChildComponentB></ChildComponentB>
      </div>
    );
  }
}

export default App;
