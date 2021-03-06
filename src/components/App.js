import React, { Component } from 'react';
import './HomePage'
import HomePage from './HomePage';
import PartyName from './partyGroup/PartyName';
import RecipeDetails from "./RecipeDetails";
import Search from "./Search";
import "./../styles/App.scss";
import Footer from './Footer';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import Account from './authenication/Account'
import PartyInvites from './partyGroup/PartyInvites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      partyName: '',
    }
  }

  updatePartyName = (name) => {
    this.setState({
      partyName: name,
    })
  }
  updateState = (a) => {
    console.log('im updating the user');
    this.setState({
      user: a,
    })
  }
  render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/account" render={ (props) => { return (<Account {...props} updateState={this.updateState} />)} } />
          <Route path="/createparty" render={ (props) => { return (<PartyName {...props} user={this.state.user} updatePartyName={this.updatePartyName} partyName={this.state.partyName}/>)} } />
          <Route path='/dashboard/:partyName' render={ (props) => { return (<PartyInvites {...props} partyName={this.state.partyName} updatePartyName={this.updatePartyName} user={this.state.user} /> )}} />
          <Route exact path="/search" component={Search} />
          <Route path="/meal/:idMeal" render={ (props) => { return (<RecipeDetails {...props} partyName={this.state.partyName} /> )}} />
        </Switch>
      </div>
      <Footer/>
    </Router>

  );
 
  }
}


export default App;


