import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class HomePage extends Component {
    render() {
        return(
        <div>
            <Login />
            <div className="">
                <button>Login</button>
                <button>SignUp</button>
                <div>
                    <SignUp />
                </div>
            </div>
        </div>   
        )
    }
}

export default HomePage;