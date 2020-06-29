import React, { Component } from 'react';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import firebase from './../firebase';
import Search from "./Search";
import "./../styles/App.scss";
import Footer from './Footer';

class App extends Component {
  render() {
  return (
    <div className="App">
      <HomePage />
      <PartyName />
      {/* importing just for test purposes */}
      <Search />
      <Footer/>
    </div>
  );
 
  }
}


export default App;

