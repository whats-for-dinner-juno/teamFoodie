import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class Account extends Component {
    render() {
        return(
            <div className="authenication">
                <Login />
                <SignUp />
            </div>
        )
    }
}

export default Account;