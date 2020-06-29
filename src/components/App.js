import React, { Component } from 'react';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import firebase from './../firebase';
import Search from "./Search";
import "./../styles/App.scss";
class App extends Component {

  render() {
  return (
    <div className="App">
      <HomePage />
      <PartyName />
      {/* importing just for test purposes */}
      <Search />
    </div>
  );
 
  }
}


export default App;


