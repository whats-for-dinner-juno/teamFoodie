import React, { Component } from 'react';
import SignUp from './SignUp';

class HomePage extends Component {

    render() {
        return(
        <div>
            <div className="">
                <button>Login</button>
                <button>SignUp</button>
                <div class="heroContainer">
                    <div className="headerText">
                        <h1>What's for Dinner?</h1>
                    </div>
                    <div class="inner"></div>
                </div>
                <div>
                    <SignUp />
                </div>
            </div>
        </div>   
        )
    }
}

export default HomePage;