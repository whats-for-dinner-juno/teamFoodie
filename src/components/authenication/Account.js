import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Referral from '../Referral';

class Account extends Component {
    render() {
        return(
            <div className="authenication">
                <Login />
                <SignUp />
                <Referral />
            </div>
        )
    }
}

export default Account;