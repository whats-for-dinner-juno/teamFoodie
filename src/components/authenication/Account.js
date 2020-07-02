import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Account extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="authenication">
                <Route path="/account/login" render={ props => { return (<Login  updateState={this.props.updateState} user={this.props.user}/>)} } />
                <Route path="/account/signup" component={SignUp} />
            </div>
        )
    }
}

export default Account;