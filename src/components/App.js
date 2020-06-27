import React, { Component } from 'react';
import Search from './Search';
import './../styles/App.scss';

class App extends Component {
  render() {
  return (
    <div className="App">

      {/* importing just for test purposes */}
      <Search />
    </div>
  );
  }
}

export default App;
