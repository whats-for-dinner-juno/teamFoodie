import React, { Component } from 'react';
import Search from './Search';
import './../styles/App.scss';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import RecipeDetails from "./RecipeDetails";
import firebase from './../firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  render() {
  return (
    <div className="App">
      <Router>
        <HomePage />
        <PartyName />
        {/* importing just for test purposes */}
        <Route exact path="/search" component={Search} />
        <Route exact path="/meal/:idMeal" component={RecipeDetails} />
      </Router>
    </div>
  );
 
  }
}


export default App;


