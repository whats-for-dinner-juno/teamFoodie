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
import Account from './authenication/Account'

class App extends Component {
  render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/account" component={Account} />
        <Route path="/createparty" component={PartyName} />
        </Switch>

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


