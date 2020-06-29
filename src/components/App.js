import React, { Component } from 'react';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import firebase from './../firebase';
import Search from "./Search";
import "./../styles/App.scss";
import Footer from './Footer';
import Login from './authenication/Login';
import SignUp from './authenication/SignUp';
import { BrowserRouter as Router, NavLink, Link, Route } from 'react-router-dom';
import Account from './authenication/Account';
import Referral from './Referral';

class App extends Component {
  render() {
  return (

    <Router>
      <div className="App">
        <Route path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />

        {/* <PartyName /> */}
        {/* importing just for test purposes */}
        {/* <Search /> */}
        {/* <Referral /> */}
        <Footer/>
      </div>
    </Router>
  );
 
  }
}


export default App;


