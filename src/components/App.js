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
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import Referral from './Referral';


class App extends Component {
  render() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createparty" component={PartyName} />
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


