import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylings/App.css';
import Display from "./Display";
import Button from "./Button"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Button />
      </div>
    );
  }
}

export default App;
