import React, { Component } from 'react';
import SignUp from './SignUp';

class HomePage extends Component {
    render() {
        return(
        <div>
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