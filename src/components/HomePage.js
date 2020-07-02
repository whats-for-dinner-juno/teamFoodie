import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
} from "react-router-dom";
import steptwo from "./../assets/steptwo.jpg";
import group from "./../assets/groupParty.jpg";
import account from "./../assets/account.jpg";


class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="landingPage">
          <div class="heroContainer">
            <div className="headerText">
              <h1>What's for Dinner?</h1>
              <Link to="/account/login">
                <button className="btn login">Log In</button>
              </Link>
              <Link to="/account/signup">
                <button className="btn create"> Create an Account</button>
              </Link>
            </div>
            <div class="inner"></div>
          </div>
          <div className="infoSection wrapper">
            <div className="infoContent">
              <h2>Step One:</h2>
              <p>Create an Account</p>
              <img className="steps" src={account} alt="icon for creating account" />
            </div>
            <div className="infoContent">
              <h2>Step Two:</h2>
              <p>Make A Party Organization</p>
              <img className="steps" src={steptwo} alt="icon of a cup with green tea" />
            </div>
            <div className="infoContent">
              <h2>Step Three:</h2>
              <p>Invite Friends and divide Tasks!</p>
              <img className="steps" src={group} alt="icon for creating account" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
