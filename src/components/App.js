import React, { Component } from 'react';
import './../styles/App.scss';
import './HomePage'
import HomePage from './HomePage';

class App extends Component {
  render() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
  }
}

export default App;
