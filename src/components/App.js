<<<<<<< HEAD
import React, { Component } from 'react';
import Search from './Search';
import './../styles/App.scss';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import firebase from './../firebase';

=======
import React, { Component } from "react";
import Search from "./Search";
import "./../styles/App.scss";
import "./HomePage";
import HomePage from "./HomePage";
>>>>>>> e7efea9e53b5d93b96ee13e7802a24355cb57c95
class App extends Component {

  render() {
<<<<<<< HEAD
  return (
    <div className="App">
      <HomePage />
      <PartyName />
      {/* importing just for test purposes */}
      {/* <Search /> */}
    </div>
  );
=======
    return (
      <div className="App">
        <HomePage />

        {/* importing just for test purposes */}
        <Search />
      </div>
    );
>>>>>>> e7efea9e53b5d93b96ee13e7802a24355cb57c95
  }
}


export default App;


