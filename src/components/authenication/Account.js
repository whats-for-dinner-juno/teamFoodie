import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Account extends Component {
    render() {
        return(
            <div className="authenication">
                <Router>
                    <Route path="" component={Login}></Route>
                    <Route path="" component={SignUp}></Route>           
                </Router>
            </div>
        )
    }
}

export default Account;