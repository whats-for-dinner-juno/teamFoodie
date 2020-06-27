import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

class HomePage extends Component {
    render() {
        return(
        <div>
            <div className="">
                <button>Login</button>
                <button>SignUp</button>
                <div>
                    <Login />
                    <SignUp />
                </div>
            </div>
        </div>   
        )
    }
}

export default HomePage;