import React, { Component } from 'react';
import Search from './Search';
import './../styles/App.scss';
import './HomePage'
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />

        {/* importing just for test purposes */}
        <Search />
      </div>
    );
  }
}

export default App;