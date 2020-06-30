import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Account extends Component {
    render() {
        return(
            <div className="authenication">
                <Switch>
                    <Route path="/account/login" component={Login} />
                    <Route path="/account/signup" component={SignUp} />
                </Switch>
                {/* <Router>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={SignUp}></Route>           
                </Router> */}
            </div>
        )
    }
}

export default Account;